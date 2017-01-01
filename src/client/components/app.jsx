import React from 'react';
import NavigationBar from './navigation/NavigationBar';
import NavigationDrawer from './navigation/NavigationDrawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
               toggleDrawer={this.toggleDrawer}
               user={this.state.user}>
            </NavigationBar>
            <NavigationDrawer drawerOpen={this.state.drawerOpen}/>
            <div className={`app-content ${this.state.drawerOpen ? 'expanded' : ''}`} >
               <div className="row center-xs">
                  <div className="col-xs-6">
                     <div className="box">
                        <TextField
                           hintText="Search"
                           floatingLabelText="Find Recipes"
                           fullWidth={true}
                        />
                     </div>
                  </div>
               </div>
               <FloatingActionButton secondary={true} style={{ position: "fixed", bottom: "20", right: "20" }}>
                  <ContentAdd />
               </FloatingActionButton>

            </div>
         </div>
      </MuiThemeProvider>
   }

};
