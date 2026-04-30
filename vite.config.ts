import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "gsap/SplitText": path.resolve(__dirname, "src/gsap-bonus/SplitText"),
      "gsap/ScrollSmoother": path.resolve(__dirname, "src/gsap-bonus/ScrollSmoother"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          "three-vendor": ["three", "three-stdlib"],
          "react-vendor": ["react", "react-dom"],
          "gsap-vendor": ["gsap", "@gsap/react"],
          "physics-vendor": ["@react-three/rapier", "@dimforge/rapier3d-compat"],
        },
      },
    },
  },
});
