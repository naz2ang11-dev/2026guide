import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 설정을 하나로 합쳤습니다!
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '/2026guide/', // 깃허브 페이지 주소를 위한 설정
}))import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 설정을 하나로 합쳤습니다!
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '/2026guide/', // 깃허브 페이지 주소를 위한 설정
}))
