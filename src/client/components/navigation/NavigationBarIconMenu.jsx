import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import UserAvatar from 'client/components/UserAvatar';
import 'client/components/navigation/style/NavigationBar';

export default class NavigationBarIconMenu extends React.Component {
   constructor(props) {
      super(props);

      this.signOut = this.signOut.bind(this);
      this.signIn = this.signIn.bind(this);
   }

   signOut() {
      window.location = '/auth/logout';
   }

   signIn() {
      window.location = '/auth/facebook';
   }

   render() {
      if(this.props.user) {
         return <IconMenu
               iconButtonElement={<IconButton className="nav-button-logged-in"><UserAvatar user={this.props.user}/><ExpandMoreIcon/></IconButton>}
               anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
               targetOrigin={{horizontal: 'right', vertical: 'bottom'}}>
            <MenuItem primaryText="Sign out" onTouchTap={this.signOut}/>
         </IconMenu>;
      }

      return <FlatButton label="Sign In" onTouchTap={this.signIn}/>;
   }

};
