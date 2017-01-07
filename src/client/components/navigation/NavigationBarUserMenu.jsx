import React, {PropTypes} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import UserAvatar from 'components/UserAvatar';
import 'components/navigation/style/NavigationBarUserMenu';


class NavigationBarUserMenu extends React.Component {
   constructor(props) {
      super(props);

      this.signOut = this.signOut.bind(this);
   }

   signOut() {
      window.location = '/auth/logout';
   }

   render() {
      return (<IconMenu
         iconButtonElement={<IconButton className='nav-button-logged-in'><UserAvatar user={this.props.user}/><ExpandMoreIcon/></IconButton>}
         anchorOrigin={{
            "horizontal": "right",
            "vertical": "bottom"
         }}
         targetOrigin={{
            "horizontal": "right",
            "vertical": "top"
         }}>
         <MenuItem primaryText='Sign Out' onTouchTap={this.signOut}/>
      </IconMenu>);
   }

}

NavigationBarUserMenu.propTypes = {
   user: PropTypes.object
};

export default NavigationBarUserMenu;
