// Fonts should use CDN. Leaving this here for offline development.
import 'material-design-icons/iconfont/MaterialIcons-Regular.svg';
import 'material-design-icons/iconfont/material-icons.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// This block of code will eventually move into the navigation
// or sidebar React component
// import $ from 'jquery';
// $(document).ready(function () {
//    $('.button-collapse').sideNav();
// });

ReactDOM.render(
   <App user={window.user}/>,
   document.getElementById('root')
);
