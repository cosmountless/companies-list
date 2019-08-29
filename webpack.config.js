const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';
const env = isProduction ? 'production': 'development';

const rules = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: 'babel-loader',
  },
  {
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: isProduction ? '[hash:base64:10]' :'[name]__[local]'
          },
          importLoaders: 1,
          sourceMap: !isProduction,
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: !isProduction,
        }
      }
    ]
  },
];

module.exports = {
  entry: './src/js/index.js',
  mode: env,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: rules,
  },
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};