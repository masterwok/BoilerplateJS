import * as types from 'actions/actionTypes';

const initialState = {
   drawerOpen: false
};

export default function userReducer(state = initialState, action) {
   switch (action.type) {
      case types.NAV_TOGGLE_DRAWER:
         return Object.assign({}, state, {
            drawerOpen: !state.drawerOpen
         });
      default:
         return state;
   }
}
