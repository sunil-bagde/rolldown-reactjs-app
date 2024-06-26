import { defineConfig } from 'rolldown'
import react from '@vitejs/plugin-react'

export default defineConfig({
  input: './src/main.tsx',
  plugins: [react()],
  resolve: {
    conditionNames: ['import'],
  },
})
