import React, {Component, PropTypes} from 'react';
import NavigationBar from 'components/navigation/NavigationBar';
import NavigationDrawer from 'components/navigation/NavigationDrawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
   constructor(props) {
      super(props);

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
               toggleDrawer={this.toggleDrawer}
               user={this.state.user}/>
            <NavigationDrawer drawerOpen={this.state.drawerOpen}/>
            <div
               className={`app-content ${this.state.drawerOpen
               ? 'expanded'
               : ''}`}>
               {this.props.children}
               </div>
         </div>
      </MuiThemeProvider>;
   }

};

App.PropTypes = {
   children: PropTypes.object.isRequired
}

export default App;
