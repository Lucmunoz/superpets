import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    global: true,
    coverage: {
      reporter: ['html']
    }
  }
})
