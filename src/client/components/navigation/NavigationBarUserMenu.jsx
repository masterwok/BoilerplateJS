import React, { PropTypes } from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import UserAvatar from 'components/UserAvatar';
import 'components/navigation/style/NavigationBarUserMenu';

const NavigationBarUserMenu = (props) => {
   return (
      <IconMenu
      iconButtonElement={<IconButton className='nav-button-logged-in'><UserAvatar user={props.user}/><ExpandMoreIcon/></IconButton>}
      anchorOrigin={{
         "horizontal": "right",
         "vertical": "bottom"
      }}
      targetOrigin={{
         "horizontal": "right",
         "vertical": "top"
      }}>
         <MenuItem primaryText='Sign Out' onTouchTap={props.signOut}/>
      </IconMenu>
      );
};

NavigationBarUserMenu.propTypes = {
   user: PropTypes.object,
   signOut: PropTypes.func
};

export default NavigationBarUserMenu;
