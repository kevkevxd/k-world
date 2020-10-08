/* global __dirname:false */

const path = require("path");

module.exports = {
  entry: ["react-hot-loader/patch", "./k-world/index"],
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, "src"), path.join(__dirname, "k-world")],
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["react-hot-loader/babel"],
          },
        },
      },
      {
        test: /\.json$/,
        use: {
          loader: "json-loader",
        },
      },
      {
        test: /\.css$/,
        include: [path.join(__dirname, "src"), path.join(__dirname, "k-world")],
        use: {
          loader: "style-loader!css-loader!postcss-loader",
        },
      },
    ],
  },
};
