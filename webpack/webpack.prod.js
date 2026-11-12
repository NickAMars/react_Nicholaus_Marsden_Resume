const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const commonConfig =  require("./weback.config");

module.exports = merge( commonConfig, {
    mode: "production",
    devtool: "source-map",
    performance: {
        hints: "warning",
        maxEntrypointSize: 500 * 1024,
        maxAssetSize: 300 * 1024,
    },
    module: {
        rules: [
          {
            test: /\.(scss|css)$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].[contenthash].css",
        }),
        new HtmlWebpackPlugin({
          favicon: path.resolve(__dirname, "..", "src/assets/Nicholaus_Marsden.png"),
          template: path.resolve(__dirname, "..", "public/index.html"),
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true,
            minifyCSS: true,
            minifyJS: true,
          }
        })
    ]
});
