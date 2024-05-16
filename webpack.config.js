const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: true,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(jpg|png|mp4)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "images",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["svg-inline-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    port: 5000,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html",favicon:"./public/tabicon.ico" }),
    new MiniCssExtractPlugin({ filename: "styles.css" }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
