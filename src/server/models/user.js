import mongoose from 'mongoose';

// Schema definition for users
const userSchema = mongoose.Schema({
   joinedOn: {
      type: Date,
      required: true
   },
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
      givenName: String,
      familyName: String
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

   newUser.joinedOn = Date.now();
   newUser.facebook.id = profile.id;
   newUser.facebook.token = token;
   newUser.facebook.givenName = profile.name.givenName;
   newUser.facebook.familyName = profile.name.familyName;

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

export default userSchema;
