const isDev = process.env.NODE_ENV !== 'production';

export default {
  srcDir: 'src',
  target: 'static',
  head: {
    title: 'Абрикосики',
    meta: [
      { charset: 'utf-8'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Абрикосики - детский сад в Красноярске' },
      { hid: 'keywords', name: 'keywords', content: 'абрикосики, детский сад, белые росы' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-touch-fullscreen', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  loading: {color: '#B2CC14'},

  ...(!isDev && {
    modern: 'client',
  }),

  env: {
    ymSiteId: process.env.YANDEX_METRICA,
  },

  css: [
    '@/assets/css/main.scss',
  ],

  styleResources: {
    scss: ['./styles/variables.scss'],
  },

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    [
      'nuxt-purgecss',
      {
        mode: 'webpack',
        enabled: ({ isDev, isClient }) => (!isDev && isClient), // or `false` when in dev/debug mode
        paths: [
          'src/components/**/*.vue',
          'src/layouts/**/*.vue',
          'src/pages/**/*.vue',
          'src/plugins/**/*.js',
        ],
        styleExtensions: ['.css', 'scss'],
        whitelist: ['body', 'html', 'nuxt-progress'],
        extractors: [
          {
            extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
            extensions: ['html', 'vue', 'js'],
          },
        ],
      },
    ],
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Roboto: [400, 500, 700],
        },
        display: 'swap',
        download: true,
        overwriting: false,
        preload: true,
      },
    ],
  ],

  modules: [
    '@nuxtjs/yandex-metrika',
    'nuxt-route-meta',
  ],

  yandexMetrika: {
    id: process.env.YANDEX_METRICA,
    webvisor: true,
    clickmap:true,
    useCDN:false,
    trackLinks:true,
    accurateTrackBounce:true,
  },

  build: {
    extend(config, { isClient }) {
      config.resolve.extensions = ['.js', '.json', '.vue', '.ts'];
      if (!isDev && isClient) {
        config.devtool = 'source-map';
      }
    },

    filenames: {
      app: ({isDev}) => isDev ? '[name].js' : 'js/[name]_[contenthash].js',
      chunk: ({isDev}) => isDev ? '[name].js' : 'js/[name]_[contenthash].js',
      css: ({isDev}) => isDev ? '[name].css' : 'css/[name]_[contenthash].css',
      img: ({isDev}) => isDev ? '[path][name].[ext]' : 'img/[name]_[contenthash:7].[ext]',
      font: ({isDev}) => isDev ? '[path][name].[ext]' : 'fonts/[name]_[contenthash:7].[ext]',
      video: ({isDev}) => isDev ? '[path][name].[ext]' : 'videos/[name]_[contenthash:7].[ext]',
    },

    postcss: {
      preset: {
        autoprefixer: {
          flexbox: true,
          grid: true,
          overrideBrowserslist: ['cover 99.5%', 'not IE < 9'],
        },
      },
    },

    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },

    optimization: {
      minimize: !isDev,
    },

    ...(!isDev && {
      extractCSS: {
        ignoreOrder: false,
      },
    }),

    babel: {
      babelrc: false,
      cacheDirectory: undefined,
      plugins: ['@babel/plugin-transform-runtime'],
    },

    ...(!isDev && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true,
        },
      },
    }),
  },

  server: {
    host: '0.0.0.0',
    port: 8097,
  },
};
