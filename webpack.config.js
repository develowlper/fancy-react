module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  target: 'node',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle,js‚',
    libraryTarget: 'commonjs2'
  },
  devServer: {
    contentBase: './dist'
  },
  externals: {
    react: 'commonjs react', // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
    'react-dom': 'commonjs react-dom'
  }
};
