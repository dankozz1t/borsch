export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],

  css: ['@/assets/styles/common.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/style.scss";',
        },
      },
    },
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ua',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Borsch',
      meta: [
        {
          name: 'description',
          content: 'Borsch - веб-додаток, де смак України оживає в твоїх рецептах',
        },
      ],
    },
  },
});
