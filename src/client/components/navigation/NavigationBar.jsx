import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import NavigationBarUserMenu from 'components/navigation/NavigationBarUserMenu';
import FontIcon from 'material-ui/FontIcon';

class NavigationBar extends React.Component {
   constructor(props) {
      super(props);

      this.signIn = this
         .signIn
         .bind(this);
   }

   signIn() {
      window.location = '/auth/facebook';
   }

   render() {
      return (
         <AppBar
         className={this.props.drawerOpen ? 'app-bar expanded' : 'app-bar'}
         onLeftIconButtonTouchTap={this.props.toggleDrawer}
         iconElementRight={this.props.user
            ? <NavigationBarUserMenu user={this.props.user}/>
            : <FlatButton
            label='Sign In'
            icon={<FontIcon className='fa fa-facebook-official'/>}
            onTouchTap={this.signIn}/>}
         title='Development'/>
         );
   }
}

NavigationBar.propTypes = {
   toggleDrawer: PropTypes.func,
   drawerOpen: PropTypes.bool,
   user: PropTypes.object
};

export default NavigationBar;
