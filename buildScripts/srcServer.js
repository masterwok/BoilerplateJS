import express from 'express';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'
import mongoose from 'mongoose';
import passport from 'passport';
import passportConfig from '../src/config/passport.js'
import routes from '../src/config/routes.js';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import configDb from '../src/config/database.js';

/* eslint-disable  no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);
const secret = 'oioihacktheplanet';

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
app.use(session({
   secret: secret,
   resave: true,
   saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

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
      open('http://localhost:' + port);
   }
});
