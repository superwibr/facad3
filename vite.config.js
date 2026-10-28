import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        lib: {
            // Pass the CSS file directly as your entry point
            entry: resolve(import.meta.dirname, "src/index.js"),
            name: "Facad3",
            cssFileName: "fcd3"
        },
        cssMinify: false    
    }
});
