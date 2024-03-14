import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/loja-virtual/',
  build: {
    assetsDir: 'assets', // Diretório onde as imagens serão copiadas
    rollupOptions: {
      output: {
        // manualChunks: undefined // Garanta que não haja otimização adicional
      }
    }
  }
// base: '/loja-virtual/',
})


