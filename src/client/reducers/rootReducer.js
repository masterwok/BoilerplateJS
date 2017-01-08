// This is the root reducer. It's purpose is to combine all
// of the user defined reducers into one.

import {combineReducers} from 'redux';
import navigation from 'reducers/navigationReducer';
import user from 'reducers/userReducer';
import recipes from 'reducers/recipeReducer';

const rootReducer = combineReducers({
   // Add all reducers here...
   navigation,
   user,
   recipes
});

export default rootReducer;
