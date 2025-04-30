const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?reload=true', // HMR для HTML
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
    assetModuleFilename: 'assets/images/[name][ext]', // Путь для изображений в dist
    publicPath: '/', // Базовый путь для всех ресурсов
  },
  devServer: {
    static: [
      {
        directory: path.resolve(__dirname, 'src/assets'), // Обслуживаем src/assets
        publicPath: '/assets', // Доступ по /assets
      },
      {
        directory: path.resolve(__dirname, 'dist'), // Обслуживаем dist
        publicPath: '/',
      },
    ],
    port: 3000, // Изменяем порт на 3000
    open: true,
    hot: true,
    watchFiles: ['src/**/*'],
    compress: true,
    historyApiFallback: true,
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }
      const { app } = devServer;
      app.use(
        require('webpack-hot-middleware')(devServer.compiler, {
          path: '/__webpack_hmr',
          heartbeat: 10 * 1000,
        })
      );
      return middlewares;
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]', // Путь для изображений в dist
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
};