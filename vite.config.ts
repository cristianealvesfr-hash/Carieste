import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
