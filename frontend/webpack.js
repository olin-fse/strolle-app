const path = require('path');
const webpack = require('webpack');

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
            {loader: 'style-loader'},
            {loader: 'css-loader', options: {importLoaders: 1}}
        ]
      },
      {
          test: /\.(png|jpg)$/,
          loader: 'url-loader?limit=8192'
      },
      {
          test: /\.svg$/,
          loader: 'iocons-loader'
      },
      {
          test: /node_modules[\/\\]@mapbox[\/\\]react-geocoder[\/\\].*\.js/,
           loader: 'babel-loader',
           query: {presets:['react','es2015']}
      }
    ]
}



};
