import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const NavigationDrawer = (props) => {
   return (
      <Drawer docked={true} open={props.drawerOpen}>
         <MenuItem primaryText='Awesome'/>
         <MenuItem primaryText='Cool'/>
         <MenuItem primaryText='Meow'/>
         <MenuItem primaryText='Zeff'/>
      </Drawer>
      );
};

NavigationDrawer.propTypes = {
   drawerOpen: PropTypes.bool
};

export default NavigationDrawer;
