import configureAuthRoutes from './auth.routes.js';

export default function (app) {

   // Configure authentication routes
   configureAuthRoutes(app);

   // Entry point to the application
   app.get('/', (req, res) => {
      return res.render('main', {
         title: 'Greetigs, we ycome in peace <3',
         user: req.user
      });
   });

}
