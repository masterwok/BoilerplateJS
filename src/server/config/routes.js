import configureAuthRoutes from './auth.routes.js';

export default function (app) {

   // Configure authentication routes
   configureAuthRoutes(app);

   // Entry point to the application
   app.get('/', (req, res) => {
      if (req.isAuthenticated()) {
         return res.render('home', {
            title: 'Welcome Back!',
            user: req.user
         });
      }

      return res.render('index', {
         title: 'Greetigs, we come in peace <3'
      });
   });

}
