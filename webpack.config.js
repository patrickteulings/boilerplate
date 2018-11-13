const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: {
    main: [
      './src/js/script.js',
      './src/scss/style.scss'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'app.js'
  },
  module : {
    rules : [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false, sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "eslint-loader",
          options: {
            configFile: __dirname + '/.eslintrc'
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
        filename: "style.css"
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc'
    }
    ),
  ],
};
