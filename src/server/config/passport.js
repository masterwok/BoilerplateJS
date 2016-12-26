import { Strategy as FacebookStrategy } from 'passport-facebook'
import authConfig from './auth';
import User from '../models/user'

export default function (passport, host) {
   passport.serializeUser((user, done) => {
      done(null, user.id);
   });

   passport.deserializeUser((id, done) => {
      User.getById(id, (err, user) => {
         done(err, user);
      });
   });

   passport.use(new FacebookStrategy({
      clientID: authConfig.facebook.clientID,
      clientSecret: authConfig.facebook.clientSecret,
      callbackURL: `${host}${authConfig.facebook.callbackPath}`,
      profileFields: ['emails', 'name']
   }, (token, refreshToken, profile, done) => {

      User.getByFacebookId(profile.id, (err, user) => {
         if (err) {
            // Something went wrong
            return done(err);
         }

         if (user) {
            // Return existing user
            return done(null, user);
         }

         // Create a new user
         User.createFacebookUser(token, refreshToken, profile, (err, user) => {
            if (err) {
               return done(err);
            }

            return done(null, user);
         });
      });
   }));

}
