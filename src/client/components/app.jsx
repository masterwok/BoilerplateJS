import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './navigation/NavigationBar';
import NavigationDrawer from './navigation/NavigationDrawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class App extends React.Component {
   constructor(props) {
      super(props);

      injectTapEventPlugin();

      this.state = {
         user: user,
         drawerOpen: false
      };

      this.toggleDrawer = this
         .toggleDrawer
         .bind(this);
   }

   toggleDrawer() {
      this.setState({
         drawerOpen: !this.state.drawerOpen
      });
   }

   render() {
      return <MuiThemeProvider>
         <div>
            <NavigationBar
               drawerOpen={this.state.drawerOpen}
               toggleDrawer={this.toggleDrawer}/>
            <NavigationDrawer drawerOpen={this.state.drawerOpen}/>
         </div>
      </MuiThemeProvider>
   }

};
