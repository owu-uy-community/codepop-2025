import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Dir name: ', __dirname);

// https://vite.dev/config/
//
export default defineConfig(({ command }) => {
  const defaultConfig = {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@routes/*': path.resolve(__dirname, './src/routes'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@components': path.resolve(__dirname, './src/components'),
      },
    },
  };

  switch(command) {
    case "serve":
      return defaultConfig;
    case "build":
      const custom = {
        base: '/codepop-2025/'
      };

      return { ...defaultConfig, ...custom };
    default:
      throw `Unknown command: ${command}`;
  }
})
