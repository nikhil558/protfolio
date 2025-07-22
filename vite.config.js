import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      name: "treat-js-files-as-jsx",
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null;

        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic",
        });
      },
    },
    react(),
    tailwindcss(),
  ],
  base: "/portfolio/",
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 0.5s ease-out",
      },
    },
  },
});
