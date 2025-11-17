// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    
    // Setting NODE_ENV to "production" is generally correct for a UMD library
    // to ensure you get the smaller, faster production version of React components.
    define: {
        "process.env.NODE_ENV": '"production"'
    },
    
    build: {
        lib: {
            entry: "src/widget.tsx",
            name: "Q2LP",
            formats: ["umd"],
            fileName: () => `q2lp.umd.js`
        },
        
        rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime"],
            
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM"
                },
                exports: "named",
                extend: true
            },
        }
    }
});