import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import typography from '@tailwindcss/typography';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/alejocarreteroweb/',
  darkMode: "class", // Importante: Usa "class" en lugar de "media"
  plugins: [react(), tailwindcss({
    plugins: [typography],
  }),],
  assetsInclude: ["**/*.md"],
  build: {
    rollupOptions: {
      input: 'index.html',

    },
    outDir: 'dist'
  },
})
