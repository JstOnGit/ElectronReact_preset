'use strict';

const path = require('path');

// Load .env file from the project root if it exists
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

// Ensure both Vite and Electron child processes run in development mode
process.env.NODE_ENV = 'development';

const host = process.env.DEV_HOST || 'localhost';
const port = process.env.DEV_PORT || '5173';
const url = `http://${host}:${port}`;

const { concurrently } = require('concurrently');

const { result } = concurrently(
  [
    { command: 'vite', name: 'vite', prefixColor: 'cyan' },
    {
      command: `wait-on ${url} && electron .`,
      name: 'electron',
      prefixColor: 'magenta',
    },
  ],
  {
    killOthers: ['failure'],
    prefix: 'name',
  }
);

result.then(
  () => process.exit(0),
  () => process.exit(1)
);
