module.exports = {
  devtool: 'eval',
  // default values of webpack:
  // entry: './src/index.js',
  // output: {
  //   path: __dirname,
  //   filename: './dist/main.js'
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
