import React, { Component, PropTypes } from 'react';
import NavigationBar from 'components/navigation/NavigationBar';
import NavigationDrawer from 'components/navigation/NavigationDrawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import * as navigationActions from 'actions/navigationActions';
import { bindActionCreators } from 'redux';

class App extends Component {
   constructor(props) {
      super(props);

      this.signIn = this.signIn.bind(this);
      this.signOut = this.signOut.bind(this);
      this.toggleDrawer = this.toggleDrawer.bind(this);
   }

   toggleDrawer() {
      this.props.navigationActions.toggleDrawer();
   }

   signOut() {
      window.location = '/auth/logout';
   }

   signIn() {
      window.location = '/auth/facebook';
   }

   render() {
      return (
         <MuiThemeProvider>
            <div>
               <NavigationBar
         drawerOpen={this.props.navigation.drawerOpen}
         toggleDrawer={this.toggleDrawer}
         signIn={this.signIn}
         signOut={this.signOut}
         user={this.props.user}/>
               <NavigationDrawer drawerOpen={this.props.navigation.drawerOpen}/>
               <div className={`app-content ${this.props.navigation.drawerOpen ? 'expanded' : ''}`}>
                  {this.props.children}
               </div>
            </div>
         </MuiThemeProvider>
         );
   }
}

App.propTypes = {
   navigationActions: PropTypes.object,
   children: PropTypes.object.isRequired,
   navigation: PropTypes.object.isRequired,
   user: PropTypes.object
};

const mapStateToProps = (state) => {
   return {
      user: state.user,
      navigation: state.navigation
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      navigationActions: bindActionCreators(navigationActions, dispatch)
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
