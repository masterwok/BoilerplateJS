import path from 'path';
import webpack from 'webpack';

export default {
   debug: true,
   // https://webpack.github.io/docs/configuration.html#devtool
   devtool: 'inline-source-map',
   noInfo: false,
   colors: true,
   entry: [
      path.resolve(__dirname, 'src/index')
   ],
   target: 'web',
   output: {
      path: path.resolve(__dirname, 'src'),
      publicPath: '/',
      filename: 'bundle.js'
   },
   plugins: [
      new webpack.ProvidePlugin({
         $: "jquery",
         jQuery: "jquery",
         "window.jQuery": "jquery",
         Hammer: "hammerjs/hammer"
      })
   ],
   module: {
      loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel']
         },
         {
            test: '/materialize-css/bin/',
            loader: 'imports?jQuery=jquery,$=jquery,hammerjs'
         },
         { test: /\.css$/, loader: "style-loader!css-loader" },
         { test: /\.png$/, loader: 'url-loader?limit=100000' },
         { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
         { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" }
      ]
   }
}
