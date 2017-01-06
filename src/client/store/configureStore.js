// This file configures and creates our store by setting
// the root reducer and it's initial state as well as any
// middleware we want to be injected.

import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from 'reducers/rootReducer';

export default function configureStore(initialState) {

   return createStore(
      rootReducer,
      initialState,
      applyMiddleware(reduxImmutableStateInvariant())
   );
}
