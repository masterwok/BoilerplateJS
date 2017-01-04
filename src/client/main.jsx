// Fonts should use CDN. Leaving this here for offline development.
import 'material-design-icons/iconfont/MaterialIcons-Regular.svg';
import 'material-design-icons/iconfont/material-icons.css';
import 'font-awesome/css/font-awesome.css'
import 'flexboxgrid/css/flexboxgrid.css'
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './components/Routes';
import {Router, browserHistory} from 'react-router'

injectTapEventPlugin();

// Remove has added by facebook on callback url
if (window.location.hash == '#_=_') {
   history.replaceState
      ? history.replaceState(null, null, window.location.href.split('#')[0])
      : window.location.hash = '';
}

ReactDOM.render(
   <Router history={browserHistory} routes={routes} user={window.user}/>, document.getElementById('root'));
