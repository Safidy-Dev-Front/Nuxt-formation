// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      title: 'Ma Formation Nuxt 3',
      meta: [{ name: 'description', content: 'Description de mon site' }]
    }
  },
  build: {
    transpile: ['vue-toastification'] // Ex. pour transpiler un package spécifique
  },
  runtimeConfig:{
    githubToken: process.env.GITHUB_TOKEN
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clients: {
      default: {
        tokenName:'github-token',
        httpEndpoint: 'https://api.github.com/graphql'
      },
      secondClient:{
        httpEndpoint: 'https://countries.trevorblades.com/'
      },
    },
  },
  css: ['~/assets/scss/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }, 
})
