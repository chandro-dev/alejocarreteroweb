import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  base: '/alejocarreteroweb/',
  plugins: [react(), tailwindcss(),
  ],  
  assetsInclude: ["**/*.md"],
  build: {
    rollupOptions: {
      input: 'index.html',

    },
    outDir: 'dist'
  },
})
