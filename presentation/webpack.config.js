/* eslint-disable */

var path = require("path");
var webpack = require("webpack");
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  devtool: "source-map",
  entry: [
  "webpack-hot-middleware/client",
  "babel-polyfill",
  "./index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new WebpackNotifierPlugin(),
  ],
    resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.jsx'] 
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: "babel",
      query: {
        plugins: [
          [
            "react-transform", {
              transforms: [{
                transform: "react-transform-hmr",
                imports: ["react"],
                locals: ["module"]
              }, {
                transform: "react-transform-catch-errors",
                imports: ["react", "redbox-react"]
              }]
            }
          ]
        ]
      },
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.css$/,
      loaders: ["style", "raw"],
      include: __dirname
    }, {
      test: /\.svg$/,
      loader: "url?limit=10000&mimetype=image/svg+xml",
      include: path.join(__dirname, "assets")
    }, {
      test: /\.png$/,
      loader: "url-loader?mimetype=image/png",
      include: path.join(__dirname, "assets")
    }, {
      test: /\.jpg$/,
      loader: "url-loader?mimetype=image/jpg",
      include: path.join(__dirname, "assets")
    }]
  },
};