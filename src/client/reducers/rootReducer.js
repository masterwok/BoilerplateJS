// This is the root reducer. It's purpose is to combine all
// of the user defined reducers into one.

import {combineReducers} from 'redux';
import user from 'reducers/userReducer';
import navigation from 'reducers/navigationReducer';

const rootReducer = combineReducers({
   // Add all reducers here...
   user,
   navigation
});

export default rootReducer;
