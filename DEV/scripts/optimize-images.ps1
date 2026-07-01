# Redimensionne les portraits PNG (UI seulement) — lance depuis la racine RDTD.
param(
  [int]$TowerMaxPx = 512,
  [int]$CollectorMaxPx = 640,
  [int]$DeckMaxPx = 192
)

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$root = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
$towersDir = Join-Path $root "assets\towers"
$collectorsDir = Join-Path $root "assets\collectors"
$deckDir = Join-Path $towersDir "deck-mini"

function Resize-PngInPlace {
  param(
    [string]$Path,
    [int]$MaxPx
  )
  if (-not (Test-Path $Path)) { return }
  $img = $null
  $bmp = $null
  $g = $null
  try {
    $img = [System.Drawing.Image]::FromFile($Path)
    $w = $img.Width
    $h = $img.Height
    if ($w -le $MaxPx -and $h -le $MaxPx) { return }
    $ratio = [Math]::Min($MaxPx / $w, $MaxPx / $h)
    $nw = [Math]::Max(1, [int][Math]::Round($w * $ratio))
    $nh = [Math]::Max(1, [int][Math]::Round($h * $ratio))
    $bmp = New-Object System.Drawing.Bitmap $nw, $nh
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.DrawImage($img, 0, 0, $nw, $nh)
    $g.Dispose()
    $g = $null
    $img.Dispose()
    $img = $null
    $ms = New-Object System.IO.MemoryStream
    $bmp.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    $bmp = $null
    [System.IO.File]::WriteAllBytes($Path, $ms.ToArray())
    $ms.Dispose()
    Write-Host "  OK $([IO.Path]::GetFileName($Path)) -> ${nw}x${nh}"
  }
  finally {
    if ($g) { $g.Dispose() }
    if ($bmp) { $bmp.Dispose() }
    if ($img) { $img.Dispose() }
  }
}

Write-Host "Tours (max ${TowerMaxPx}px)..."
Get-ChildItem $towersDir -Filter "*.png" -File | ForEach-Object {
  Resize-PngInPlace -Path $_.FullName -MaxPx $TowerMaxPx
}

if (Test-Path $deckDir) {
  Write-Host "Miniatures deck (max ${DeckMaxPx}px)..."
  Get-ChildItem $deckDir -Filter "*.png" -File | ForEach-Object {
    Resize-PngInPlace -Path $_.FullName -MaxPx $DeckMaxPx
  }
}

Write-Host "Collectionneurs (max ${CollectorMaxPx}px)..."
Get-ChildItem $collectorsDir -Filter "*.png" -File | ForEach-Object {
  Resize-PngInPlace -Path $_.FullName -MaxPx $CollectorMaxPx
}

Write-Host "Termine."
