import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import NavigationBarUserMenu from 'client/components/navigation/NavigationBarUserMenu';
import FontIcon from 'material-ui/FontIcon';

export default class NavigationBar extends React.Component {
   constructor(props) {
      super(props);

      this.signIn = this.signIn.bind(this);
   }

   signIn() {
      window.location = '/auth/facebook';
   }


   render() {
      return <AppBar
            className={this.props.drawerOpen
            ? 'app-bar expanded'
            : 'app-bar'}
            onLeftIconButtonTouchTap={this.props.toggleDrawer}
            iconElementRight={
               this.props.user
               ? <NavigationBarUserMenu user={this.props.user}/>
               : <FlatButton label="Sign In" icon={<FontIcon className="fa fa-facebook-official"/>} onTouchTap={this.signIn}/>
            }
            title="Development"/>
   }

};
