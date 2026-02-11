import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 모든 설정이 하나로 합쳐진 최종본입니다.
export default defineConfig({
  plugins: [react()],
  base: '/2026guide/', 
})
