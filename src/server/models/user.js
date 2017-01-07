import mongoose from 'mongoose';

// Schema definition for users
const userSchema = mongoose.Schema({
   facebook: {
      id: {
         type: String,
         required: true,
         unique: true
      },
      token: {
         type: String,
         required: true,
         unique: true
      },
      email: String,
      name: String
   }
});

userSchema.statics.getById = function (id, done) {
   this.findById(id, (err, user) => {
      return done(err, user);
   });
};

userSchema.statics.removeUser = function (id, done) {
   this.findById(id, (err, user) => {
      if (err) {
         return done(err);
      }

      user.remove((err) => {
         if (err) {
            return done(err);
         }

         return done(null);
      });

   });
};

// Get a user by their facebook Id.
userSchema.statics.getByFacebookId = function (id, done) {
   this.findOne({
      'facebook.id': id
   }, (err, user) => {
      if (err) {
         return done(err);
      }

      done(null, user);
   });
};

// Create a facebook user
userSchema.statics.createFacebookUser = function (token, refreshToken, profile, done) {
   let newUser = new this();

   newUser.facebook.id = profile.id;
   newUser.facebook.token = token;
   newUser.facebook.name = `${profile.name.givenName} ${profile.name.familyName}`;

   if (profile.emails.length > 0) {
      // Grab the first email
      newUser.facebook.email = profile.emails[0].value;
   }

   newUser.save((err) => {
      if (err) {
         return done(err);
      }

      return done(null, newUser);
   });
};

let User = mongoose.model('User', userSchema);
export default User;
