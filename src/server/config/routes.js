import configureAuthRoutes from './auth.routes';

export default function (app, mongoose) {

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
