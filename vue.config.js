
const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
  runtimeCompiler: true, // When you have components import from vue
  pwa: {
    manifestPath: 'manifest.json',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [/\.map$/, /_redirects/, /CNAME(.*)/],
    }
  },

  productionSourceMap: false, // Remove map in production

  filenameHashing: true,
  outputDir: 'dist',
  // publicPath: process.env.NODE_ENV === 'production'
  //     ? '/'
  //     : '/vue-app/',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  },

  crossorigin: undefined,

  // PROXY
  devServer: {
    disableHostCheck: true,
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000/',
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        optipng: {
          optimizationLevel: 9
        },
        svgo: {
          datauri: 'base64',
        },
      })
    ]
  },
}
