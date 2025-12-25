import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    commonjsOptions: {
      include: [/lucide-react/, /node_modules/]
    }
  },
  optimizeDeps: {
    include: ['lucide-react']
  }
})