import express from 'express';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import mongoose from 'mongoose';
import configureModels from '../src/server/models/models.config';
import passport from 'passport';
import configurePassport from '../src/server/config/passport';
import routes from '../src/server/config/routes';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import configDb from '../src/server/config/database';
import expressHandlebars from 'express-handlebars';
import handlebarsHelpers from '../src/server/helpers/handlebars';
import path from 'path';

/* eslint-disable  no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);
const secret = 'oioihacktheplanet';
const hostname = app.get('env') === 'development' ?
   'localhost' :
   'INSERT_AMAZING_HOSTNAME';
const host = `http://${hostname}:${port}`;

// Configure the view engine to use Handlebars
app.engine('.hbs', expressHandlebars({
   extname: '.hbs',
   layoutsDir: 'src/server/views/layouts',
   helpers: handlebarsHelpers
}));
app.set('views', path.join(__dirname, '../src/server/views'));
app.set('view engine', '.hbs');

// Connect to database
mongoose.connect(configDb.url);
configureModels(mongoose);

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
   saveUninitialized: true,
   cookie: {
      path: '/',
      httpOnly: true,
      maxAge: 36000000
   }
}));
app.use(passport.initialize());
app.use(passport.session());
configurePassport(passport, mongoose, host);

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
routes(app, mongoose);

app.listen(port, (err) => {
   if (err) {
      console.log(err);
   } else {
      // Open application in browser
      open(host);
   }
});
