import passport from 'passport';

export default (app) => {

   // Facebook authentication and login
   app.get('/auth/facebook', passport.authenticate('facebook', {
      scope: 'email'
   }));

   // This is the callback path passed to facebook that gets called
   // when the user is done with the facebook workflow.
   app.get('/auth/facebook/callback',
      passport.authenticate('facebook', {
         successRedirect: '/home',
         failureRedirect: '/'
      }));

   // Logout the user and return to root path.
   app.get('/auth/logout', (req, res) => {
      req.logout();
      res.redirect('/');
   });

};

// Middleware to enforce a user is logged in.
// If the user is not authenticated they are redirected to the root path.
export let isLoggedIn = function (req, res, next) {
   if (req.isAuthenticated()) {
      return next();
   }

   res.redirect('/');
};
