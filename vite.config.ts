// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler', {
            // React Compiler options
            compilationMode: 'annotation', // or 'infer'
            panicThreshold: 'all_errors',
            runtimeModule: 'react/compiler-runtime'
          }]
        ]
      }
    }), 
    tailwindcss()
  ],
  server: {
    port: 3000, 
  },
})
