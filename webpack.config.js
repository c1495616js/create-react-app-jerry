const path = require('path');
const HtmlWebpakcPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

function NothingPlugin() {
  // eslint-disable-next-line func-names
  this.apply = function() {};
}

const config = env => ({
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpakcPlugin({
      template: 'public/index.html',
    }),
    env && env.analyze ? new BundleAnalyzerPlugin() : new NothingPlugin(),
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist',
  },
});

module.exports = config;
