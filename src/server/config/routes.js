import path from 'path';
import configureAuthRoutes, {isLoggedIn} from './auth.routes.js';

export default function (app) {

   // Configure authentication routes
   configureAuthRoutes(app);

   // Entry point to the application
   app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../views/index.html'));
   });

   // Entry point for authenticated users
   app.get('/home', isLoggedIn, (req, res) => {
      res.sendFile(path.join(__dirname, '../views/home.html'));
   });

}

