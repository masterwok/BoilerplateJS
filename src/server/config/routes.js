import configureAuthRoutes from './auth.routes.js';

export default function (app) {

   // Configure authentication routes
   configureAuthRoutes(app);

   // Entry point to the application
   app.get('/', (req, res) => {
      return res.render('main', {
         title: '<3',
         user: req.user
      });
   });

}
