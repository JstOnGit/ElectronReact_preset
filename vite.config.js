import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const host = env.DEV_HOST || 'localhost';
  const port = parseInt(env.DEV_PORT || '5173', 10);

  return {
    plugins: [react()],
    root: '.',
    base: './',
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      host,
      port,
    },
  };
});