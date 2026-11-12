const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "..", "src", "index.tsx"),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "..", "dist"),
        clean: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".svg", ".jpg", "pdf"],
      alias: {
        '@src': path.resolve(__dirname, "..", 'src'),
        '@assets': path.resolve(__dirname, "..", 'src/assets'),
        '@mui/styled-engine': '@mui/styled-engine-sc'
      },

    },
    devServer: {
        static: {
          directory: path.resolve(__dirname, "..", "dist"),
        },
        port: 4000,
        open: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
          {
            test: /\.(ts|js)x?$/,
            include: path.resolve(__dirname, "..", "src"),
            exclude: path.resolve(__dirname, "..", "node_modules"),
            use: "babel-loader"
          },
          {
            test: /\.(png|jpg|jpeg|gif)$/,
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024,
              },
            },
            generator: {
              filename: 'images/[name].[contenthash][ext]',
            },
          },
          {
            test: /\.pdf$/,
            type: 'asset/resource',
            generator: {
              filename: 'assets/[name].[contenthash][ext]',
            },
          },
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          }
        ],
    },
    optimization: {
        usedExports: true,
        runtimeChunk: 'single',
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            mui: {
              test: /[\\/]node_modules[\\/]@mui[\\/]/,
              name: 'vendors-mui',
              chunks: 'all',
              priority: 20,
            },
            leaflet: {
              test: /[\\/]node_modules[\\/](leaflet|react-leaflet)[\\/]/,
              name: 'vendors-leaflet',
              chunks: 'all',
              priority: 20,
            },
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
            },
          },
        },
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new CompressionPlugin({
          test: /\.(js|css|html|svg)$/,
          algorithm: 'gzip',
        }),
    ]
}
