module.exports = {
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  plugins: [
    '~plugins/element-ui',
  ],
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  router: {
    middleware: ['auth-cookie']
  },

  axios: {
    // proxyHeaders: false
  },
  auth: {

  },
}