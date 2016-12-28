import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './navigation/NavigationBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from 'material-ui/Drawer';

export default class App extends React.Component {
   constructor(props) {
      super(props);

      injectTapEventPlugin();

      this.state = {
         user: user,
         drawerOpen: true
      };

      this.toggleDrawer = this.toggleDrawer.bind(this);
   }

   toggleDrawer() {
      this.setState({ drawerOpen: !this.state.drawerOpen });
   }

   render() {
      return <MuiThemeProvider>
         <div>
            <NavigationBar drawerOpen={this.state.drawerOpen} toggleDrawer={this.toggleDrawer} />
            <Drawer
               docked={true}
               open={this.state.drawerOpen}>
            </Drawer>
         </div>
      </MuiThemeProvider>
   }

};
