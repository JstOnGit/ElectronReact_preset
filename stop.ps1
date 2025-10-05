Write-Host "Stopping Electron React App..."

# Kill Electron processes
Get-Process electron -ErrorAction SilentlyContinue | Stop-Process -Force

# Kill Vite dev server (if running)
Get-Process node -ErrorAction SilentlyContinue | Where-Object { $_.Path -like "*vite*" } | Stop-Process -Force

Write-Host "App stopped."