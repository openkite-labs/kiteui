import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [
    tailwindcss(),
    mdx({
      jsxImportSource: 'react',
      providerImportSource: '@mdx-js/react'
    }),
    react()
  ],
  server: {
    port: 3000
  }
})