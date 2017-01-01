import React from 'react';
import AppBar from 'material-ui/AppBar';
import NavigationBarIconMenu from 'client/components/navigation/NavigationBarIconMenu';

export default class NavigationBar extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return <AppBar
            className={this.props.drawerOpen
            ? 'app-bar expanded'
            : 'app-bar'}
            onLeftIconButtonTouchTap={this.props.toggleDrawer}
            iconElementRight={<NavigationBarIconMenu user={this.props.user}/>}
            title="Development"/>
   }

};
