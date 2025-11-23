// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler', {
            compilationMode: 'annotation',
            panicThreshold: 'all_errors',
            runtimeModule: 'react/compiler-runtime'
          }]
        ]
      }
    }), 
    tailwindcss()
  ],
  
  resolve: {
    alias: {
      // هذه هي الطريقة الصحيحة لحل مشكلة المسارات
      "@": fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  server: {
    port: 3000, 
  },
})