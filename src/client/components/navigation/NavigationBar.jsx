import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class NavigationBar extends React.Component {
   constructor(props) {
      super(props);

      this.state = { open: true };

      this.handleToggle = this.handleToggle.bind(this)
   }

   handleToggle() {
      console.log(this.state);
      this.setState({open: !this.state.open});
   }

   render() {
      return <div>
         <AppBar
            className={this.state.open ? 'app-bar expanded' : 'app-bar'}
            onLeftIconButtonTouchTap={this.handleToggle}
            title="Development"
            />
            <Drawer
            docked={true}
            open={this.state.open}>

            </Drawer>
      </div>
   }

};
