const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js', //nombre del archivo de origen,

  mode: 'development', //modo desarrollo 

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      
    ],
  },
  
  devServer: {
      open: true
  },

  output: {
    path: path.resolve(__dirname, 'dist'), //Dist es la carpeta donde se generara el archivo bundle.js
    filename: 'bundle.js' //nombre del archivo de salida
  },

  plugins: [
    new CleanWebpackPlugin(),  
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
    }),
    new CopyPlugin([
      { from: './src/images', to: 'images' },
      { from: './src/css', to: 'css' },
    ]),
  ]
};