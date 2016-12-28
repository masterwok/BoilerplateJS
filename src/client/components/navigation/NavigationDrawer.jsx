import React from 'react';
import ReactDOM from 'react-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class NavigationDrawer extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return <Drawer docked={true} open={this.props.drawerOpen}>
         <MenuItem primaryText="Awesome"/>
         <MenuItem primaryText="Cool"/>
         <MenuItem primaryText="Great"/>
         <MenuItem primaryText="Zeff"/>
      </Drawer>
   }

};
