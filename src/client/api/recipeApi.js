import 'whatwg-fetch';
import {recipes as recipeEndpoint} from 'api/endpoints';

export default {
   get: function() {
      return fetch(recipeEndpoint);
   },
   query: function(value) {
      return fetch(`${recipeEndpoint}?name_like=${value}`);
   }
};
