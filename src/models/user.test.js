import { expect } from 'chai';
import User from './user';
import mongoose from 'mongoose';
import configDb from '../config/database.js';

// Connect to database
mongoose.connect(configDb.url);

// Mock user Id that is used after it's created
let mockUserId = null;

// Mock facebook profile
let mockProfile = {
   id: 'facebook-id',
   token: 'mock-token',
   refreshToken: 'mock-refresh-token',
   name: {
      givenName: 'John',
      familyName: 'Smith'
   },
   emails: [
      { value: 'john.smith@gmail.com' }
   ]
};

describe('User Model', () => {

   it('Should create facebook user', (done) => {
      User.createFacebookUser(mockProfile.token, mockProfile.refreshToken, mockProfile, (err, user) => {
         expect(err).to.equal(null, err);
         expect(user).to.not.equal(null);
         expect(user.id).to.not.equal(null);
         expect(user.facebook.id).to.equal(mockProfile.id);
         expect(user.facebook.token).to.equal(mockProfile.token);
         expect(user.facebook.name).to.equal(`${mockProfile.name.givenName} ${mockProfile.name.familyName}`);
         expect(user.facebook.email).to.equal(mockProfile.emails[0].value);

         // Update the mock profile id
         mockUserId = user.id;

         done();
      });
   });

   it('Should get user by Id', (done) => {
      User.getById(mockUserId, (err, user) => {
         expect(err).to.equal(null, err);
         expect(user).to.not.equal(null);
         expect(user.id).to.equal(mockUserId);
         done();
      });
   });

   it('Should get user by facebook Id', (done) => {
      User.getByFacebookId(mockProfile.id, (err, user) => {
         expect(err).to.equal(null, err);
         expect(user).to.not.equal(null);
         expect(user.id).to.equal(mockUserId);
         done();
      });
   });

   it('Should prevent duplicate facebook user', (done) => {
      User.createFacebookUser(mockProfile.token, mockProfile.refreshToken, mockProfile, (err, user) => {
         expect(err).to.not.equal(null);
         expect(user).to.not.exist;
         done();
      })
   });

   // Clean up test by removing mock user
   it('Should remove user by id', (done) => {
      User.removeUser(mockUserId, (err) => {
         expect(err).to.equal(null);

         User.getById(mockUserId, (err, user) => {
            expect(err).to.equal(null, err);
            expect(user).to.equal(null);
            done();
         });
      });

   });

});
