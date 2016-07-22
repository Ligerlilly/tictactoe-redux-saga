var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src', 'main')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-2']
      },
      include: __dirname
    }]
  }
}


// When inside Redux repo, prefer src to compiled version.
// You can safely delete these lines in your project.
var reduxSagaSrc = path.join(__dirname, '..', '..', 'src')
var reduxNodeModules = path.join(__dirname, '..', '..', 'node_modules')
var fs = require('fs')
if (fs.existsSync(reduxSagaSrc) && fs.existsSync(reduxNodeModules)) {
  // Resolve Redux to source
  module.exports.resolve = { alias: { 'redux-saga': reduxSagaSrc } }
  // Compile Redux from source
  module.exports.module.loaders.push({
    test: /\.js$/,
    loader: 'babel',
    query: {
      presets: ['react', 'es2015', 'stage-2']
    },
    include: reduxSagaSrc
  })

  // include sagaMonitor
  module.exports.module.loaders.push({
    test: /\.js$/,
    loader: 'babel',
    query: {
      presets: ['react', 'es2015', 'stage-2']
    },
    include: path.join(__dirname, '..', 'sagaMonitor')
  })
}
