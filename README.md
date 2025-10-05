# Electron React App preset

Preset for an Electron application integrated with React.

## Features

- Custom title bar with window controls
- React Router for navigation
- Vite for fast development and builds

## Getting Started

### Clone the repository

```sh
git clone https://github.com/JstOnGit/ElectronReact_preset.git
```

### Install dependencies

run the "npm install" command while in the root of the project.
```sh
npm install
```

### Run in development mode

Run the "run.ps1" script.
```sh
.\run.ps1
```

### to force stop

Run the "stop.ps1" script.
```sh
.\stop.ps1
```

### Build for production

Run the "build.ps1" script.
```sh
.\build.ps1
```

### To clean the project
```sh
.\clean.ps1
```

## Project Structure

```
assets/
    icon.png
src/
    main.js
    preload.js
    renderer/
        App.jsx
        App.css
        index.jsx
        components/
            TitleBar.jsx
            css/
                TitleBar.css
        pages/
            Home.jsx
            css/
                Home.css
.babelrc
index.html
package.json
vite.config.js
run.ps1
stop.ps1
build.ps1
clean.ps1
```

## License


MIT

