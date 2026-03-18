# Electron React App preset

Preset for an Electron application integrated with React.

## Configuring a Custom Dev Server IP / Port

By default the Vite development server listens on `localhost:5173`.
To use a different IP address or port (e.g. to bind to a LAN interface so other devices on your network can connect), create a `.env` file in the project root:

```sh
cp .env.example .env
```

Then edit `.env` and set the values you need:

```dotenv
DEV_HOST=192.168.1.100   # IP address or hostname to listen on
DEV_PORT=5173            # port number
```

> **Tip:** Set `DEV_HOST=0.0.0.0` to listen on **all** network interfaces.

After saving `.env`, run the app in development mode as usual:

```sh
.\run.ps1
```

The Vite server and the Electron window will both use the IP/port you specified.

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
ElectronReact_Preset/
├── assets/
│   └── icon.png
├── src/
│   ├── main.js
│   ├── preload.js
│   └── renderer/
│       ├── App.jsx
│       ├── App.css
│       ├── index.jsx
│       ├── components/
│       │   ├── TitleBar.jsx
│       │   └── css/
│       │       └── TitleBar.css
│       └── pages/
│           ├── Home.jsx
│           └── css/
│               └── Home.css
├── .babelrc
├── index.html
├── package.json
├── vite.config.js
├── run.ps1
├── stop.ps1
├── build.ps1
└── clean.ps1
```

## License


MIT



