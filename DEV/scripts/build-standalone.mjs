#!/usr/bin/env node
/** Génère standalone.js (équivalent Node de build-standalone.ps1). */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const Root = path.resolve(__dirname, "../..");
const Entry = process.argv[2] || "game.js";
const OutFile = process.argv[3] || "standalone.js";
const EntryPath = path.join(Root, Entry);
const OutPath = path.join(Root, OutFile);

function getModuleId(filePath) {
  const full = path.resolve(filePath);
  const rootFull = path.resolve(Root);
  return full.slice(rootFull.length + 1).split(path.sep).join("/");
}

function resolveModuleId(fromId, spec) {
  let clean = spec.replace(/[?#].*$/, "");
  if (!clean.endsWith(".js")) clean = `${clean}.js`;
  if (clean.startsWith(".")) {
    const baseDir = path.dirname(path.join(Root, fromId));
    return getModuleId(path.join(baseDir, clean));
  }
  return clean;
}

function splitSpecList(text) {
  return text
    .trim()
    .replace(/^\{|\}$/g, "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function convertImport(moduleId, spec, target) {
  const targetId = resolveModuleId(moduleId, target);
  const s = spec.trim();
  if (s.startsWith("* as ")) {
    const name = s.slice(5).trim();
    return `const ${name} = require("${targetId}");\n`;
  }
  if (s.startsWith("{")) {
    const items = [];
    for (const part of splitSpecList(s)) {
      const m = part.match(/^([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)$/);
      if (m) items.push(`${m[1]}: ${m[2]}`);
      else items.push(part);
    }
    return `const { ${items.join(", ")} } = require("${targetId}");\n`;
  }
  throw new Error(`Import non supporté dans ${moduleId} : ${spec} from ${target}`);
}

const importPattern = /^\s*import\s+(.+?)\s+from\s+["']([^"']+)["'];\s*/gms;
const moduleIds = [];
const moduleCode = new Map();
const visiting = new Set();

function addModule(moduleId) {
  if (moduleCode.has(moduleId)) return;
  if (visiting.has(moduleId)) return;
  visiting.add(moduleId);
  const filePath = path.join(Root, moduleId);
  if (!fs.existsSync(filePath)) throw new Error(`Module introuvable: ${moduleId}`);
  const code = fs.readFileSync(filePath, "utf8");
  for (const m of code.matchAll(importPattern)) {
    addModule(resolveModuleId(moduleId, m[2]));
  }
  moduleIds.push(moduleId);
  moduleCode.set(moduleId, code);
  visiting.delete(moduleId);
}

function transformModule(moduleId, code) {
  const exports = [];
  let out = code.replace(/\r\n/g, "\n");
  out = out.replace(importPattern, (_all, spec, target) => convertImport(moduleId, spec, target));
  out = out.replaceAll("import.meta.url", `new URL("${moduleId}", location.href).href`);

  out = out.replace(/^(\s*)export\s+(const|let|var)\s+([A-Za-z_$][\w$]*)/gm, (_a, ind, kind, name) => {
    exports.push({ local: name, exported: name });
    return `${ind}${kind} ${name}`;
  });
  out = out.replace(/^(\s*)export\s+(async\s+function|function|class)\s+([A-Za-z_$][\w$]*)/gm, (_a, ind, kind, name) => {
    exports.push({ local: name, exported: name });
    return `${ind}${kind} ${name}`;
  });
  out = out.replace(/^\s*export\s*\{(.+?)\};\s*/gms, (_a, body) => {
    for (const part of splitSpecList(body)) {
      const m = part.match(/^([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)$/);
      if (m) exports.push({ local: m[1], exported: m[2] });
      else exports.push({ local: part, exported: part });
    }
    return "";
  });

  if (exports.length > 0) {
    out += "\n";
    for (const ex of exports) {
      out += `exports["${ex.exported}"] = ${ex.local};\n`;
    }
  }
  return out;
}

addModule(getModuleId(EntryPath));

const manifest = JSON.parse(fs.readFileSync(path.join(Root, "content/manifest.json"), "utf8"));
const contentLines = [
  "globalThis.__RDTD_STANDALONE_CONTENT__ = {",
  `  version: ${JSON.stringify(manifest.version)},`,
  "  files: {",
];
for (const file of manifest.files) {
  const json = fs.readFileSync(path.join(Root, "content", file), "utf8").trim();
  contentLines.push(`    ${JSON.stringify(file)}: ${json},`);
}
contentLines.push("  }", "};");

const bundle = [
  "/* Auto-genere par DEV/scripts/build-standalone.mjs. Ne pas modifier a la main. */",
  "(function () {",
  "const modules = Object.create(null);",
  "const cache = Object.create(null);",
  "function define(id, factory) { modules[id] = factory; }",
  "function require(id) {",
  "  if (cache[id]) return cache[id].exports;",
  "  if (!modules[id]) throw new Error('Module introuvable: ' + id);",
  "  const module = cache[id] = { exports: {} };",
  "  modules[id](module.exports, require, module);",
  "  return module.exports;",
  "}",
  contentLines.join("\n"),
];

for (const id of moduleIds) {
  bundle.push(`define("${id}", function (exports, require, module) {`);
  bundle.push(transformModule(id, moduleCode.get(id)));
  bundle.push("});");
}

const entryId = getModuleId(EntryPath);
bundle.push(`require("${entryId}");`);
bundle.push("})();");

fs.writeFileSync(OutPath, bundle.join("\n"), "utf8");
console.log(`Standalone genere: ${OutPath}`);
