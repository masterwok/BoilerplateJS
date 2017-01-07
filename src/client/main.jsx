// Fonts should use CDN. Leaving this here for offline development.
import 'babel-polyfill';
import 'material-design-icons/iconfont/MaterialIcons-Regular.svg';
import 'material-design-icons/iconfont/material-icons';
import 'font-awesome/css/font-awesome';
import 'flexboxgrid/css/flexboxgrid';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from 'components/Routes';
import { Router, browserHistory } from 'react-router';
import configureStore from 'store/configureStore';

// Grab the user that's returned from the server-side.
const user = window.user;

// Pass the user to our root reducer as the initial state.
const store = configureStore({
   user
});

// Inject the tap event plugin for react (React won't require this in the future).
injectTapEventPlugin();

// Remove has added by facebook on callback url
if (window.location.hash == '#_=_') {
   history.replaceState
      ? history.replaceState(null, null, window.location.href.split('#')[0])
      : window.location.hash = '';
}

ReactDOM.render(
   <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
   </Provider>
   , document.getElementById('root')
);
