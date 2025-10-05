$distPath = Join-Path $PSScriptRoot "dist"

if (Test-Path $distPath) {
    Remove-Item -Recurse -Force $distPath
    Write-Host "Deleted 'dist' folder."
} else {
    Write-Host "'dist' folder does not exist."
}