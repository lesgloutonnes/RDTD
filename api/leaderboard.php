<?php
declare(strict_types=1);

const LEADERBOARD_MAX = 8;
const STORE_MAX = 500;
const MAX_SCORE = 99999999;

$dataDir = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'data';
$dataFile = $dataDir . DIRECTORY_SEPARATOR . 'leaderboard.json';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

function respond(array $payload, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function sanitize_text($value, string $fallback, int $maxLength): string
{
    $text = trim((string)($value ?? $fallback));
    $text = preg_replace('/[<>"\'&\x00-\x1F\x7F]/u', '', $text) ?? '';
    if (function_exists('mb_substr')) {
        $text = mb_substr($text, 0, $maxLength, 'UTF-8');
    } else {
        $text = substr($text, 0, $maxLength);
    }
    return $text !== '' ? $text : $fallback;
}

function clamp_int($value, int $min, int $max, int $fallback): int
{
    $n = filter_var($value, FILTER_VALIDATE_INT);
    if ($n === false) {
        $n = $fallback;
    }
    return max($min, min($max, (int)$n));
}

function today_key(): string
{
    return date('Ymd');
}

function display_date(): string
{
    return date('d/m/y');
}

function sanitize_entry($incoming): ?array
{
    if (!is_array($incoming)) {
        return null;
    }

    $score = filter_var($incoming['score'] ?? null, FILTER_VALIDATE_INT);
    if ($score === false || $score < 1 || $score > MAX_SCORE) {
        return null;
    }

    $entry = [
        'name' => sanitize_text($incoming['name'] ?? null, 'Anonyme', 18),
        'score' => (int)$score,
        'floor' => clamp_int($incoming['floor'] ?? null, 1, 99, 1),
        'wave' => clamp_int($incoming['wave'] ?? null, 0, 999, 0),
        'collector' => sanitize_text($incoming['collector'] ?? null, 'Aucun', 32),
        'date' => sanitize_text($incoming['date'] ?? null, display_date(), 16),
    ];

    $dailyKey = trim((string)($incoming['dailyKey'] ?? ''));
    if (preg_match('/^\d{8}$/', $dailyKey)) {
        $entry['dailyKey'] = $dailyKey;
    }

    $spire = clamp_int($incoming['spire'] ?? null, 0, 9, 0);
    if ($spire > 0) {
        $entry['spire'] = $spire;
    }

    if ((int)($incoming['victory'] ?? 0) === 1) {
        $entry['victory'] = 1;
    }

    $mutation = sanitize_text($incoming['mutation'] ?? '', '', 32);
    if ($mutation !== '') {
        $entry['mutation'] = $mutation;
    }

    $deck = sanitize_text($incoming['deck'] ?? '', '', 64);
    if ($deck !== '') {
        $entry['deck'] = $deck;
    }

    return $entry;
}

function sort_entries(array $entries, int $limit = LEADERBOARD_MAX): array
{
    usort($entries, static function (array $a, array $b): int {
        return ((int)($b['score'] ?? 0)) <=> ((int)($a['score'] ?? 0));
    });
    return array_slice($entries, 0, $limit);
}

function payload(array $entries): array
{
    $key = today_key();
    $clean = array_values(array_filter(array_map('sanitize_entry', $entries)));
    return [
        'ok' => true,
        'entries' => sort_entries($clean),
        'dailyEntries' => sort_entries(array_values(array_filter($clean, static function (array $entry) use ($key): bool {
            return ($entry['dailyKey'] ?? '') === $key;
        }))),
        'dailyKey' => $key,
    ];
}

function ensure_store(string $dataDir, string $dataFile): void
{
    if (!is_dir($dataDir) && !mkdir($dataDir, 0755, true)) {
        respond(['ok' => false, 'error' => 'storage_unavailable', 'detail' => 'data_dir_not_writable'], 500);
    }
    if (!file_exists($dataFile) && file_put_contents($dataFile, "[]\n", LOCK_EX) === false) {
        respond(['ok' => false, 'error' => 'storage_unavailable', 'detail' => 'data_file_not_writable'], 500);
    }
}

function read_entries_from_string(string $raw): array
{
    $decoded = json_decode($raw, true);
    if (!is_array($decoded)) {
        return [];
    }
    return array_values(array_filter(array_map('sanitize_entry', $decoded)));
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($method !== 'GET' && $method !== 'POST') {
    respond(['ok' => false, 'error' => 'method_not_allowed'], 405);
}

ensure_store($dataDir, $dataFile);

if ($method === 'GET') {
    $raw = file_get_contents($dataFile);
    respond(payload(read_entries_from_string($raw === false ? '[]' : $raw)));
}

$incoming = json_decode(file_get_contents('php://input') ?: '', true);
$entry = sanitize_entry($incoming);
if (!$entry) {
    respond(['ok' => false, 'error' => 'invalid_entry'], 400);
}
$entry['date'] = display_date();

$handle = fopen($dataFile, 'c+');
if (!$handle || !flock($handle, LOCK_EX)) {
    respond(['ok' => false, 'error' => 'storage_unavailable', 'detail' => 'lock_failed'], 500);
}

$raw = stream_get_contents($handle);
$entries = read_entries_from_string($raw === false ? '[]' : $raw);
$entries[] = $entry;
$entries = sort_entries($entries, STORE_MAX);

rewind($handle);
ftruncate($handle, 0);
fwrite($handle, json_encode($entries, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . "\n");
fflush($handle);
flock($handle, LOCK_UN);
fclose($handle);

respond(payload($entries));
