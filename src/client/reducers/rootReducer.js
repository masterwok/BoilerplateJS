// This is the root reducer. It's purpose is to combine all
// of the user defined reducers into one.

import {combineReducers} from 'redux';
import navigation from 'reducers/navigationReducer';
import user from 'reducers/userReducer';
import recipe from 'reducers/recipeReducer';

const rootReducer = combineReducers({
   // Add all reducers here...
   navigation,
   user,
   recipe
});

export default rootReducer;
