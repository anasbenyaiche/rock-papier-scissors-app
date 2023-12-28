/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    global: true,
    exclude: ["**/*.test.tsx"],
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },
});

// export default defineConfig({
//   plugins: [react()],
//   test: {
//     global: true,
//     exclude: ["**/*.test.tsx"],
//     environment: "jsdom",
//     setupFiles: ["./src/setupTests.ts"],
//   },
// });
