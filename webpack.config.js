module.exports = {
  entry: [
    './src/index.js',
    'webpack/hot/dev-server',
    'react-hot-loader/patch'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.(js|jsx)/,
      exclude: /node_modules/,
      loader: "react-hot-loader/webpack"
    },
    {
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};