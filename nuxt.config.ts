// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    'nuxt-svgo'
  ],
  svgo: {
    autoImportPath: './assets/icons/',
    fontControlled: false,
    customComponent: 'SVGO',
    componentPrefix: 'svg',
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
  },
  googleFonts: {
    families: {
      Inter: [500, 600, 700, 800],
    },
    base64: true
  },
  image: {},
})
