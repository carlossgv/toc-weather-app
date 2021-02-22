const path = require('path');

module.exports = {
  entry: './weather/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
  },
  mode: 'development',
};
