import express from 'express';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'
import mongoose from 'mongoose';
import passport from 'passport';
import configurePassport from '../src/server/config/passport.js'
import routes from '../src/server/config/routes.js';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import configDb from '../src/server/config/database.js';

/* eslint-disable  no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);
const secret = 'oioihacktheplanet';

// Get our hostname base on Express environment
let hostname = app.get('env') === 'development' ?
   'localhost' :
   'INSERT_AMAZING_HOSTNAME';

let host = `http://${hostname}:${port}`;

// Connect to database
mongoose.connect(configDb.url);

// Middleware configuration
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());


// Configure and initialize passport
// More info on passport authentication flow:
// http://toon.io/understanding-passportjs-authentication-flow/
app.use(session({
   secret: secret,
   resave: true,
   saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
configurePassport(passport, host);

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

// Routes
routes(app);

app.listen(port, (err) => {
   if (err) {
      console.log(err);
   } else {
      // Open application in browser
      open(host);
   }
});
