// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: 'netlify'
  },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@sidebase/nuxt-auth'
  ],
  auth: {
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: '/login', method: 'post' },
        signOut: { path: '/logout', method: 'post' },
        getSession: { path: '/session', method: 'get' }
      },
      token: { 
        signInResponseTokenPointer: '/token',
        maxAgeInSeconds: 86400 // 24 hours
      },
      pages: {
        login: '/login'
      }
    },
    session: {
      enableRefreshPeriodically: 1000 * 60 * 15, // Refresh every 15 mins
      enableRefreshOnWindowFocus: true
    },
    globalAppMiddleware: false,
  },
  ui: {
    global: true,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  srcDir: '.',
  compatibilityDate: '2024-04-20',
})
