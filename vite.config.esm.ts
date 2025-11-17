import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: '/public/',
    define: {
        "process.env.NODE_ENV": '"production"', // ✅ фикс для process
    },
    publicDir: false, 
    build: {
        outDir: "dist/esm",
        lib: {
            entry: "src/widget.tsx",      // твой виджет
            formats: ["es"],              // ✅ сборка как ESM
            fileName: () => "q2lp.esm.js"
        },
        rollupOptions: {
            external: [],   // не вбивать React в бандл
        }
    }
});
