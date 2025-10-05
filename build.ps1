Write-Host "Building React frontend with Vite..."
npm run build

Write-Host "Packaging Electron app for distribution..."
npx electron-builder

Write-Host "Build complete. Check the 'dist' folder for output."