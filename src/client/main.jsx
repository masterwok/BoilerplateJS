// Fonts should use CDN. Leaving this here for offline development.
import 'material-design-icons/iconfont/MaterialIcons-Regular.svg';
import 'material-design-icons/iconfont/material-icons.css';
import 'font-awesome/css/font-awesome.css'
import 'flexboxgrid/css/flexboxgrid.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
   <App user={window.user}/>,
   document.getElementById('root')
);
