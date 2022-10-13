const path = require('path')
// vue.config.js
module.exports = {
  // options...
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            // https://github.com/vuejs/vue-loader
            'vue-loader',
            // https://webpack.docschina.org/loaders/raw-loader/
            // 'raw-loader',
            {
              loader: path.resolve(__dirname, "./build/md-loader/index.js"),
            }
          ]
        }
      ]
    }
  },
  runtimeCompiler: true, 
}