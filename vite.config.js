import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/loja-virtual/',
  build: {
        outDir: 'doc',
  }
//  base: '/loja-virtual/',
//teste 
})
