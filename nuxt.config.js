export default {
  target: 'static',

  head: {
    title: 'Check my brain',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],

  modules: ['@nuxt/content'],

  content: {
    markdown: {
      remarkPlugins: [
        ['remark-wiki-link', { hrefTemplate: (permalink) => `/${permalink}` }],
      ],
    },
  },

  build: {},
}
