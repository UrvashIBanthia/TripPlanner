var HtmlWebpackPlugin= require('html-webpack-plugin');
var HTMLWebpackPluginConfig=new HtmlWebpackPlugin({
  template:'./app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {

  entry: [
     "./app/js/app.js"

  ],

  output: {
    path: __dirname + "/dist",
    filename: "app.js"

  },

  resolve: {
   extensions: ['.js', '.jsx', '.json']
 },

 module: {
   loaders: [
     {

     test: /\.js?$/,
     exclude: /node_modules/,
     loaders: ["react-hot-loader", "babel-loader"],

     }


   ]
 },

 plugins: [HTMLWebpackPluginConfig]
}
