import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import NavigationBarUserMenu from 'components/navigation/NavigationBarUserMenu';
import FontIcon from 'material-ui/FontIcon';
import HistoryIcon from 'material-ui/svg-icons/action/history';
import IconButton from 'material-ui/IconButton';

const NavigationBar = (props) => {
   return (
      <AppBar
      className={props.drawerOpen ? 'app-bar expanded' : 'app-bar'}
      onLeftIconButtonTouchTap={props.toggleDrawer}
      iconElementLeft={<IconButton><HistoryIcon /></IconButton>}
      iconElementRight={props.user
         ? <NavigationBarUserMenu user={props.user} signOut={props.signOut}/>
         : <FlatButton label='Sign In' icon={<FontIcon className='fa fa-facebook-official'/>} onTouchTap={props.signIn}/>}
      title='Development'/>
      );
};

NavigationBar.propTypes = {
   signIn: PropTypes.func,
   signOut: PropTypes.func,
   toggleDrawer: PropTypes.func,
   drawerOpen: PropTypes.bool,
   user: PropTypes.object
};

export default NavigationBar;
