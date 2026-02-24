// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url'

const root = fileURLToPath(new URL('.', import.meta.url))

export default defineNuxtConfig({
  app: {
    rootId: 'app-root'
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/scss/global.scss'],
  nitro: {
    output: {
      dir: 'build'
    }
  },
  alias: {
    '@': root
  }
})
