import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),svgr()], 
  optimizeDeps: {
    exclude: ['react-smooth'],  // exclude from dependency pre-bundling
  },
  build: {
    rollupOptions: {
      external: ['react-smooth'],  // mark as external to not bundle it
    }}
  
})
