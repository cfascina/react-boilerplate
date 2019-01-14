const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/media/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  resolve: {
    alias: {
      // Styles
      ApplicationStyles: path.resolve(__dirname, 'src/assets/scss/app.scss'),

      // API
      AxiosAPI: path.resolve(__dirname, 'src/api/AxiosAPI.jsx'),

      // Scripts
      jQueryLog: path.resolve(__dirname, 'src/assets/js/jquery.log.js'),

      // Commom Components
      Nav: path.resolve(__dirname, 'src/components/commons/Nav.jsx'),

      // Pages and its Components
      About: path.resolve(__dirname, 'src/components/pages/about/About.jsx'),
      AboutDesc: path.resolve(__dirname, 'src/components/pages/about/components/AboutDesc.jsx'),
      Axios: path.resolve(__dirname, 'src/components/pages/axios/Axios.jsx'),
      AxiosDesc: path.resolve(__dirname, 'src/components/pages/axios/components/AxiosDesc.jsx'),
      Home: path.resolve(__dirname, 'src/components/pages/home/Home.jsx'),
      HomeDesc: path.resolve(__dirname, 'src/components/pages/home/components/HomeDesc.jsx'),
      NotFound: path.resolve(__dirname, 'src/components/pages/not-found/NotFound.jsx'),
    }
  },
  devServer: {
    compress: true,
    contentBase: './dist',
    historyApiFallback: true,
    port: 8080,
    stats: 'errors-only'
  },
  devtool: 'inline-source-map'
};
