import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

export default class NavigationBar extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return <div>
         <AppBar
            className={this.props.drawerOpen ? 'app-bar expanded' : 'app-bar'}
            onLeftIconButtonTouchTap={this.props.toggleDrawer}
            title="Development" />
      </div>
   }

};
