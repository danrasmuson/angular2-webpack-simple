// webpack.config.js
module.exports = {
  entry: [
    './src/vendor.ts',
    './src/main'
  ],
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
   loaders: [
     {
       test: /\.ts$/,
       loader: 'awesome-typescript-loader'
     }
   ]
 }
};
