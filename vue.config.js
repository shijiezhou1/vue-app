
const path = require('path');

module.exports = {
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

  devServer: {
    disableHostCheck: true,
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000/',
        ws: false,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': true ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.runtime.min.js',
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [

    ],
  },
}
