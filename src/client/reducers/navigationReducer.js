const initialState = {
   drawerOpen: false
};

export default function userReducer(state = initialState, action) {
   switch (action.type) {
      case 'TOGGLE_DRAWER':
         return Object.assign({}, state, {
            drawerOpen: !state.drawerOpen
         });
      default:
         return state;
   }
}
