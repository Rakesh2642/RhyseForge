declare module '#auth' {
  const getServerSession: typeof import('R:/Company Portal/products/3.Certificatation_preparation/node_modules/@sidebase/nuxt-auth/dist/runtime/server/services').getServerSession
  const getToken: typeof import('R:/Company Portal/products/3.Certificatation_preparation/node_modules/@sidebase/nuxt-auth/dist/runtime/server/services').getToken
  const NuxtAuthHandler: typeof import('R:/Company Portal/products/3.Certificatation_preparation/node_modules/@sidebase/nuxt-auth/dist/runtime/server/services').NuxtAuthHandler
interface SessionData {
  id: string | number
}
}