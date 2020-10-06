const createPath = require('path').posix.join;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = {
  DEV: 'src',
  PROD: 'dist',
  ASSETS: 'assets'
};

module.exports = (env = {}) => {
  const { mode = 'development' } = env;
  const isDevelopment = mode === 'development';
  const isProduction = mode === 'production';

  const getPlugins = () => {
    const plugins = [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: createPath(paths.DEV, 'index.html'),
        favicon: createPath(paths.DEV, paths.ASSETS, 'images', 'favicon.png')
      })
    ];
    if (isProduction) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: createPath(paths.ASSETS, 'style', 'style-[hash:5].css')
        })
      );
    }
    return plugins;
  };

  const getStyleLoaders = () => {
    const loaders = [
      isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader'
    ];
    if (isProduction) loaders.push('postcss-loader');
    return [
      ...loaders,
      'sass-loader'
    ];
  };

  return {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'inline-source-map' : false,
    entry: createPath(__dirname, paths.DEV, 'index.tsx'),
    output: {
      path: createPath(__dirname, paths.PROD),
      filename: createPath(paths.ASSETS, 'js', 'bundle-[hash:5].js')
    },
    devServer: {
      contentBase: createPath(__dirname, paths.PROD),
      port: 9000,
      compress: true,
      open: true,
      historyApiFallback: true
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
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

        // Loading TS
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            'ts-loader'
          ]
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
                outputPath: createPath(paths.ASSETS, 'images'),
                publicPath: isProduction
                  ? '../images'
                  : createPath(paths.ASSETS, 'images'),
                esModule: false
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
                outputPath: createPath(paths.ASSETS, 'fonts'),
                publicPath: isProduction
                  ? '../fonts'
                  : createPath(paths.ASSETS, 'fonts')
              }
            }
          ]
        }
      ]

    }
  };
};
