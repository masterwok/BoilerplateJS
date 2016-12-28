import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import NavigationBarIconMenu from './NavigationBarIconMenu';

export default class NavigationBar extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return <div>
         <AppBar
            className={this.props.drawerOpen
            ? 'app-bar expanded'
            : 'app-bar'}
            onLeftIconButtonTouchTap={this.props.toggleDrawer}
            iconElementRight={<NavigationBarIconMenu/>}
            title="Development"/>
      </div>
   }

};
