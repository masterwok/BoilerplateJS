import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'

/* eslint-disable  no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

// Tell webpack to use our webpack dev middleware and pass it our compiler
app.use(require('webpack-dev-middleware')(compiler, {
   // Don't display special info
   noInfo: true,
   // Define public path defined in our webpack configss
   publicPath: config.output.publicPath,
   stats: {
      colors: true
   }
}));

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen(port, function (err) {
   if (err) {
      console.log(err);
   } else {
      // Open application in browser
      open('http://localhost:' + port);
   }
});
