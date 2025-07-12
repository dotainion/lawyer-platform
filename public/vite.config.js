import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/lawyer-platform/',
  plugins: [react()],
  build: {
    outDir: 'lawyer-platform'
  }
})
