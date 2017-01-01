import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
   debug: true,
   // https://webpack.github.io/docs/configuration.html#devtool
   devtool: 'inline-source-map',
   noInfo: false,
   colors: true,
   entry: [
      path.resolve(__dirname, 'src/client/main.jsx'),
      path.resolve(__dirname, 'src/server/style/site.css')
   ],
   target: 'web',
   output: {
      path: path.resolve(__dirname, 'src'),
      publicPath: '/',
      filename: 'bundle.js'
   },
   resolve: {
      root: path.resolve(__dirname),
      alias: {
         client: 'src/client'
      },
      // Resolve extensions automatically so they aren't required during import.
      // The empty string allows for files with extensions to be imported.
      extensions: [".webpack.js", ".web.js", ".js", ".jsx", ".css", ""]
   },
   plugins: [
      new webpack.ProvidePlugin({
         $: "jquery",
         jQuery: "jquery",
         "window.jQuery": "jquery",
         Hammer: "hammerjs/hammer"
      }),
      new ExtractTextPlugin("styles.css")
   ],
   module: {
      loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: ['babel']
         },
         {
            test: '/materialize-css/bin/',
            loader: 'imports?jQuery=jquery,$=jquery,hammerjs'
         },
         {
            test: /\.css/,
            loader: ExtractTextPlugin.extract("css")
         },
         { test: /\.png$/, loader: 'url-loader?limit=100000' },
         { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
         { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" }
      ]
   }
}
