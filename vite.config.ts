import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import fs from "fs"

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    {
      name: 'copy-404-for-gh-pages',
      closeBundle() {
        const distDir = path.resolve(__dirname, 'dist')
        const indexFile = path.join(distDir, 'index.html')
        const notFoundFile = path.join(distDir, '404.html')
        if (fs.existsSync(indexFile)) {
          fs.copyFileSync(indexFile, notFoundFile)
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules/lucide-react')) return 'icons'
          if (
            /node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(id)
          ) {
            return 'vendor'
          }
        }
      }
    }
  }
})
