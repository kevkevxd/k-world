/* global __dirname:false */
//webpack-dev-server --port 9000
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["./k-world/index"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
  devServer: {
    port: 3002,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: {
          loader: "style-loader!css-loader!postcss-loader",
        },
      },
    ],
  },
};
