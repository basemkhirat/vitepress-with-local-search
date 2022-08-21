import { defineConfig } from "vite";
import path from 'path';

export default defineConfig(() => {
  return {
    resolve: {
      alias: [
        { find: "./VPNavBarSearch.vue", replacement: path.resolve("docs/components/Search.vue"), },
      ]
    }
  }
});