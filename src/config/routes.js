import path from 'path';
import passport from 'passport';

export default function (app) {
   app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../views/index.html'));
   });

   app.get('/home', isLoggedIn, (req, res) => {
      res.sendFile(path.join(__dirname, '../views/home.html'));
   });

   // Facebook authentication and login
   app.get('/auth/facebook', passport.authenticate('facebook', {
      scope: 'email'
   }));

   app.get('/auth/facebook/callback',
      passport.authenticate('facebook', {
         successRedirect: '/home',
         failureRedirect: '/'
      }));

   // Logout
   app.get('/auth/logout', (req, res) => {
      req.logout();
      res.redirect('/');
   });
}


let isLoggedIn = function (req, res, next) {
   if (req.isAuthenticated()) {
      return next();
   }

   res.redirect('/');
};
