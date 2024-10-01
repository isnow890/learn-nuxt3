// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    shim: false,
  },

  modules: [
    'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],

  quasar: {
    plugins: ['Notify'],
    config: {
      notify: {
        position: 'top-right',
      },
    },
    /* */
  },

  imports: {
    presets: [
      {
        from: 'vue-i18n',
        imports: ['useI18n'],
      },
    ],
  },

  compatibilityDate: '2024-09-13',
  ssr: true,
  app: {
    head: {
      title: 'Vue & Nuxt 강의',
      meta: [
        {
          name: 'description',
          content: '짐코딩 nuxt 강의입니다.',
        },
      ],
    },
  },
});
