const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    path.join(__dirname, 'src/js/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'public/'),
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src/js/'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        loaders: [
            'style',
            'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize'
        ]
      }
    ]
  }
};
