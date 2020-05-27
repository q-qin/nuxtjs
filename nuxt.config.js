const proxyUrl = 'http://proxy.shoudaozi.com'; // 代理地址，解决跨域
const { parsed } = require('dotenv').config();

console.log(parsed);

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '收稻 - 国内领先的智客创业云平台',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '收稻是国内领先的智客服务、智客交易、组织优化、平台化管理、知识问答、财税咨询，自由职业者、个人创业、精益化管理、商业服务、市场咨询、设计开发交易平台。' },
      { hid: 'keywords', name: 'keywords', content: '智客服务、共享经济、众包平台、个体工商户、智客交易、综合服务平台、平台化管理、组织优化、人才分享、软件开发、市场咨询、问答社群、专家服务、专家社群、轻咨询、微服务、专家顾问、人力资源管理、企业管理、交易服务' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://hm.baidu.com/hm.js?a306dd7cfe9e194c26dd5fe538b7c917' } /* 引入百度统计的js */
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/base.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{
    src: '~plugins/ElementUI',
    ssr: true
  }, {
    src: '~plugins/seamless-scroll',
    ssr: false
  }, { src: '~plugins/baiduGa' }
  ],
  vendor: ['element-ui'],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  proxy: {
    '/api/': { target: `${proxyUrl}/api`, pathRewrite: { '^/api/': '' } }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env: {
    NODE_ENV: process.env.NODE_ENV,
    BASE_URL: process.env.NODE_ENV === 'development' ? parsed.DEV_BASE_URL : parsed.PROD_BASE_URL
  }
};
