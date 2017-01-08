import recipeApi from 'api/recipeApi';
import * as types from 'actions/actionTypes';

const getRecipesSuccess = recipes => {
   return { type: types.LOAD_RECIPES_SUCCESS, recipes };
};

export function loadRecipes() {
   return (dispatch) => {
      return recipeApi.get().then(recipes => {
         recipes.json().then(json => {
            dispatch(getRecipesSuccess(json));
         });
      }).catch(error => {
         throw error;
      });
   };
}
