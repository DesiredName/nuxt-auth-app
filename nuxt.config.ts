// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  auth: {
    globalAppMiddleware: true,
    baseURL: 'http://localhost:3000/api/auth',
    provider: {
      type: 'authjs',
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  modules: ['@sidebase/nuxt-auth'],
  runtimeConfig: {
    authSecret: '',
    oauthGithubClientSecretId: '',
    oauthGoogleClientSecretId: '',
    oauthLinkedinClientSecretId: '',
    public: {
      oauthGithubClientId: '',
      oauthGoogleClientId: '',
      oauthLinkedinClientId: '',
    }
  }
})