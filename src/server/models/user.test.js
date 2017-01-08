import { expect } from 'chai';
import mongoose from 'mongoose';
import configureModels from './models.config';
import configDb from '../config/database';
import es6Promise from 'es6-promise';
import faker from 'faker';

const User = configureModels(mongoose).User;

// The Mongoose promise library is deprecated so supply our own
mongoose.Promise = es6Promise.Promise;

// Connect to database
let db = mongoose.connect(configDb.url);

// Mock user Id that is used after it's created
let mockUserId = null;

// Mock facebook profile
let mockProfile = {
   id: faker.random.uuid(),
   token: faker.random.uuid(),
   refreshToken: faker.random.uuid(),
   name: {
      givenName: faker.name.firstName(),
      familyName: faker.name.lastName()
   },
   emails: [
      { value: faker.internet.email() }
   ]
};

describe('User Model', () => {

   it('Should create facebook user', (done) => {
      User.createFacebookUser(mockProfile.token, mockProfile.refreshToken, mockProfile, (err, user) => {
         expect(err).to.equal(null, err);
         expect(user).to.not.equal(null);
         expect(user.id).to.not.equal(null);
         expect(user.joinedOn).to.not.equal(null);
         expect(user.facebook.id).to.equal(mockProfile.id);
         expect(user.facebook.token).to.equal(mockProfile.token);
         expect(user.facebook.givenName).to.equal(mockProfile.name.givenName);
         expect(user.facebook.familyName).to.equal(mockProfile.name.familyName);
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
      });
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

   after(function () {
      // runs after all tests in this block
      db.disconnect();
   });

});
