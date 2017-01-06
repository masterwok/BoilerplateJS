// Fonts should use CDN. Leaving this here for offline development.
import 'babel-polyfill';
import 'material-design-icons/iconfont/MaterialIcons-Regular.svg';
import 'material-design-icons/iconfont/material-icons.css';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';
import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from 'components/Routes';
import {Router, browserHistory} from 'react-router';
import configureStore from 'store/configureStore';

const store = configureStore();

injectTapEventPlugin();

// Remove has added by facebook on callback url
if (window.location.hash == '#_=_') {
   history.replaceState
      ? history.replaceState(null, null, window.location.href.split('#')[0])
      : window.location.hash = '';
}

ReactDOM.render(
   <Provider store={store}>
   <Router history={browserHistory} routes={routes} user={window.user}/>
</Provider>, document.getElementById('root'));
