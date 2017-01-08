import 'whatwg-fetch';
import {recipes as recipeEndpoint} from 'api/endpoints';

export default {
   get: function() {
      return fetch(recipeEndpoint);
   }
};
