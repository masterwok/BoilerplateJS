import mongoose from 'mongoose';
import chalk from 'chalk';

// Schema definition for users
var userSchema = mongoose.Schema({
   facebook: {
      id: String,
      token: String,
      email: String,
      name: String
   }
});

userSchema.statics.getById = function (id, done) {
   this.findById(id, (err, user) => {
      done(err, user);
   });
};

// Get a user by their facebook Id.
userSchema.statics.getByFacebookId = function (id, done) {
   this.findOne({
      'facebook.id': id
   }, (err, user) => {
      if (err) {
         console.log(chalk.red(`Error while retrieving user with facebook id: ${id}, ${err}`)); // eslint-disable-line no-console
         return done(err);
      }

      done(null, user);
   });
};

// Create a facebook user
userSchema.statics.createFacebookUser = function (token, refreshToken, profile, done) {
   let newUser = new this.Schema();

   newUser.facebook.id = profile.id;
   newUser.facebook.token = token;
   newUser.facebook.name = `${profile.name.givenName} ${profile.name.familyName}`;

   if (profile.emails.length > 0) {
      // Grab the first email
      newUser.facebook.email = profile.emails[0].value;
   }

   newUser.save((err) => {
      if (err) {
         console.log(chalk.red(`Error while creating a new facebook user: ${err}`)); // eslint-disable-line no-console
         return done(err, null);
      }

      return done(null, newUser);
   });
}

export default mongoose.model('User', userSchema);
