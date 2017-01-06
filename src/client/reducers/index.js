// This is the root reducer. It's purpose is to combine all
// of the user defined reducers into one.

import {combineReducers} from 'redux';
import user from 'reducers/userReducer';

const rootReducer = combineReducers({
   // Add all reducers here...
   user
});

export default rootReducer;
