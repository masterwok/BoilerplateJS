import user from './user';

export default function (mongoose) {

   // Clear out the models and model schemas incase this is called multiple times
   mongoose.models = {};
   mongoose.modelSchemas = {};

   return {
      User: mongoose.model('User', user)
   };
}
