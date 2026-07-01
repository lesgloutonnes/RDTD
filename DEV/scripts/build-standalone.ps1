# Genere un bundle autonome compatible file://, sans serveur local.
param(
  [string]$Entry = "game.js",
  [string]$OutFile = "standalone.js"
)

$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$EntryPath = Join-Path $Root $Entry
$OutPath = Join-Path $Root $OutFile

function Get-ModuleId([string]$Path) {
  $full = [IO.Path]::GetFullPath($Path)
  $rootFull = [IO.Path]::GetFullPath($Root).TrimEnd('\', '/')
  return $full.Substring($rootFull.Length + 1).Replace('\', '/')
}

function Resolve-ModuleId([string]$FromId, [string]$Spec) {
  $clean = ($Spec -replace '[?#].*$', '')
  if (-not $clean.EndsWith(".js")) {
    $clean = "$clean.js"
  }
  if ($clean.StartsWith(".")) {
    $baseDir = Split-Path -Parent (Join-Path $Root $FromId)
    return Get-ModuleId (Join-Path $baseDir $clean)
  }
  return $clean
}

function Split-SpecList([string]$Text) {
  return $Text.Trim().Trim('{', '}').Split(',') |
    ForEach-Object { $_.Trim() } |
    Where-Object { $_ }
}

function Convert-Import([string]$ModuleId, [string]$Spec, [string]$Target) {
  $targetId = Resolve-ModuleId $ModuleId $Target
  $s = $Spec.Trim()
  if ($s.StartsWith("* as ")) {
    $name = $s.Substring(5).Trim()
    return "const $name = require(""$targetId"");`n"
  }
  if ($s.StartsWith("{")) {
    $items = @()
    foreach ($part in (Split-SpecList $s)) {
      if ($part -match '^([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)$') {
        $items += "$($matches[1]): $($matches[2])"
      } else {
        $items += $part
      }
    }
    return "const { $($items -join ', ') } = require(""$targetId"");`n"
  }
  throw "Import non supporte dans $ModuleId : $Spec from $Target"
}

$importPattern = [regex]'(?ms)^\s*import\s+(.+?)\s+from\s+["'']([^"'']+)["''];\s*'
$moduleIds = New-Object System.Collections.Generic.List[string]
$moduleCode = [ordered]@{}
$visiting = @{}

function Add-Module([string]$ModuleId) {
  if ($moduleCode.Contains($ModuleId)) { return }
  if ($visiting[$ModuleId]) { return }
  $visiting[$ModuleId] = $true

  $path = Join-Path $Root $ModuleId
  if (-not (Test-Path -LiteralPath $path -PathType Leaf)) {
    throw "Module introuvable: $ModuleId"
  }
  $code = Get-Content -LiteralPath $path -Raw -Encoding UTF8
  foreach ($m in $importPattern.Matches($code)) {
    $targetId = Resolve-ModuleId $ModuleId $m.Groups[2].Value
    Add-Module $targetId
  }
  $moduleIds.Add($ModuleId) | Out-Null
  $moduleCode[$ModuleId] = $code
  $visiting.Remove($ModuleId)
}

function Transform-Module([string]$ModuleId, [string]$Code) {
  $exports = New-Object System.Collections.Generic.List[object]
  $code = $Code -replace "`r`n", "`n"
  $code = $importPattern.Replace($code, {
    param($m)
    Convert-Import $ModuleId $m.Groups[1].Value $m.Groups[2].Value
  })

  $code = $code.Replace("import.meta.url", "new URL(""$ModuleId"", location.href).href")

  $code = [regex]::Replace($code, '(?m)^(\s*)export\s+(const|let|var)\s+([A-Za-z_$][\w$]*)', {
    param($m)
    $exports.Add([pscustomobject]@{ Local = $m.Groups[3].Value; Exported = $m.Groups[3].Value }) | Out-Null
    return "$($m.Groups[1].Value)$($m.Groups[2].Value) $($m.Groups[3].Value)"
  })
  $code = [regex]::Replace($code, '(?m)^(\s*)export\s+(async\s+function|function|class)\s+([A-Za-z_$][\w$]*)', {
    param($m)
    $exports.Add([pscustomobject]@{ Local = $m.Groups[3].Value; Exported = $m.Groups[3].Value }) | Out-Null
    return "$($m.Groups[1].Value)$($m.Groups[2].Value) $($m.Groups[3].Value)"
  })
  $code = [regex]::Replace($code, '(?ms)^\s*export\s*\{(.+?)\};\s*', {
    param($m)
    foreach ($part in (Split-SpecList $m.Groups[1].Value)) {
      if ($part -match '^([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)$') {
        $exports.Add([pscustomobject]@{ Local = $matches[1]; Exported = $matches[2] }) | Out-Null
      } else {
        $exports.Add([pscustomobject]@{ Local = $part; Exported = $part }) | Out-Null
      }
    }
    return ""
  })

  if ($exports.Count -gt 0) {
    $code += "`n"
    foreach ($ex in $exports) {
      $code += "exports[""$($ex.Exported)""] = $($ex.Local);`n"
    }
  }
  return $code
}

function Escape-JsString([string]$Text) {
  return ($Text -replace '\\', '\\' -replace '`r', '' -replace '`n', '\n' -replace '"', '\"')
}

Add-Module (Get-ModuleId $EntryPath)

$manifestPath = Join-Path $Root "content/manifest.json"
$manifest = Get-Content -LiteralPath $manifestPath -Raw -Encoding UTF8 | ConvertFrom-Json
$contentLines = New-Object System.Collections.Generic.List[string]
$contentLines.Add("globalThis.__RDTD_STANDALONE_CONTENT__ = {") | Out-Null
$contentLines.Add("  version: ""$($manifest.version)"",") | Out-Null
$contentLines.Add("  files: {") | Out-Null
foreach ($file in $manifest.files) {
  $json = Get-Content -LiteralPath (Join-Path (Join-Path $Root "content") $file) -Raw -Encoding UTF8
  $contentLines.Add("    ""$file"": $json,") | Out-Null
}
$contentLines.Add("  }") | Out-Null
$contentLines.Add("};") | Out-Null

$bundle = New-Object System.Collections.Generic.List[string]
$bundle.Add("/* Auto-genere par DEV/scripts/build-standalone.ps1. Ne pas modifier a la main. */") | Out-Null
$bundle.Add("(function () {") | Out-Null
$bundle.Add("const modules = Object.create(null);") | Out-Null
$bundle.Add("const cache = Object.create(null);") | Out-Null
$bundle.Add("function define(id, factory) { modules[id] = factory; }") | Out-Null
$bundle.Add("function require(id) {") | Out-Null
$bundle.Add("  if (cache[id]) return cache[id].exports;") | Out-Null
$bundle.Add("  if (!modules[id]) throw new Error('Module introuvable: ' + id);") | Out-Null
$bundle.Add("  const module = cache[id] = { exports: {} };") | Out-Null
$bundle.Add("  modules[id](module.exports, require, module);") | Out-Null
$bundle.Add("  return module.exports;") | Out-Null
$bundle.Add("}") | Out-Null
$bundle.Add(($contentLines -join "`n")) | Out-Null

foreach ($id in $moduleIds) {
  $transformed = Transform-Module $id $moduleCode[$id]
  $bundle.Add("define(""$id"", function (exports, require, module) {") | Out-Null
  $bundle.Add($transformed) | Out-Null
  $bundle.Add("});") | Out-Null
}

$entryId = Get-ModuleId $EntryPath
$bundle.Add("require(""$entryId"");") | Out-Null
$bundle.Add("})();") | Out-Null

Set-Content -LiteralPath $OutPath -Value ($bundle -join "`n") -Encoding UTF8
Write-Host "Standalone genere: $OutPath" -ForegroundColor Green
