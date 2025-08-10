import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    // Library build configuration
    return {
      plugins: [
        tailwindcss(),
        react(),
        dts({
          insertTypesEntry: true,
          include: ['src/lib/**/*'],
          exclude: ['src/dev/**/*', 'src/main.ts']
        })
      ],
      build: {
        lib: {
          entry: 'src/lib/index.ts',
          name: 'KiteUI',
          formats: ['es'],
          fileName: 'index'
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM'
            }
          }
        },
        sourcemap: true,
        emptyOutDir: true
      }
    }
  }

  // Development configuration
  return {
    plugins: [tailwindcss(), react()],
    root: './src/dev'
  }
})