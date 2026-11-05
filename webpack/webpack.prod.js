const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig =  require("./weback.config");

module.exports = merge( commonConfig, {
    mode: "production",
    performance: {
        hints: false, // warning
        maxEntrypointSize: 500 * 1024, // Set your desired size limit in bytes
    },
    plugins: [
        new HtmlWebpackPlugin({
          favicon: path.resolve(__dirname, "..", "src/assets/Nicholaus_Marsden.png"),
          template: path.resolve(__dirname, "..", "public/index.html"),
          minify: {
            removeComments: true
          }
        })
    ]
});