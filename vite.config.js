// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'websocket': resolve( 'node_modules/websocket'),
    },
  },
});
