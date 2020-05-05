const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {
  const { mode = 'development' } = env;
  const isDevelopment = mode === 'development';
  const isProduction = mode === 'production';

  const getPlugins = () => {
    const plugins = [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/assets/images/favicon.png'
      })
    ];
    if (isProduction) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: 'style-[hash:5].css'
        })
      );
    }
    return plugins;
  };

  const getStyleLoaders = () => {
    return [
      isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ];
  };

  return {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'inline-source-map' : 'source-map',
    entry: './src/index.js',
    output: {
      path: Path.join(__dirname, 'dist'),
      filename: isProduction ? 'bundle-[hash:5].js' : undefined
    },
    devServer: {
      contentBase: Path.join(__dirname, 'dist'),
      port: 9000,
      open: true
    },
    plugins: getPlugins(),
    module: {
      rules: [
        // Loading JS
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        // Loading styles
        {
          test: /\.(scss|sass)$/,
          use: getStyleLoaders()
        },
        // Loading images
        {
          test: /\.(jpg|jpeg|png)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name]-[hash:5].[ext]',
                outputPath: 'images/'
              }
            }
          ]
        },
        // Loading fonts
        {
          test: /\.(woff2|woff|ttf)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name]-[hash:5].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        }
      ]

    }
  };
};
