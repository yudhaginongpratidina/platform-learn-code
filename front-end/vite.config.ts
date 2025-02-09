import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    server: {
        host: "0.0.0.0",
        port: 3000
    },
    preview: {
        port: 3001
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@css": path.resolve(__dirname, "./src/assets/css"),
            "@icons": path.resolve(__dirname, "./src/assets/icons"),
            "@views": path.resolve(__dirname, "./src/views")
        },
    }
})
