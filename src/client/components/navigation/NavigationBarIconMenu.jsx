import React from 'react';
import ReactDOM from 'react-dom';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class NavigationBarIconMenu extends React.Component {
   constructor(props) {
      super(props);

      this.signOut = this.signOut.bind(this);
   }

   signOut() {
      window.location = '/auth/logout';
   }

   render() {
      return <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon color="white"/></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'bottom'}}>
         <MenuItem primaryText="Sign out" onTouchTap={this.signOut}/>
      </IconMenu>
   }

};
