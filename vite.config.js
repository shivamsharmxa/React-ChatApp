// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";
import ReactRefreshPlugin from "@vitejs/plugin-react-refresh";
import vue2 from "@vitejs/plugin-vue2";
import vitePluginRequire from "vite-plugin-require";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vitePluginRequire(), ReactRefreshPlugin()],
  resolve: {
    alias: {
      // websocket: resolve("node_modules/websocket"),
    },
  },
  build: {
    commonjsOptions: { transformMixedEsModules: true },
  },
});
