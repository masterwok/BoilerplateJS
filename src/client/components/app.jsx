import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './navigation/NavigationBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class App extends React.Component {
   constructor(props) {
      super(props);

      injectTapEventPlugin();

      this.state = {
         user: user
      };
   }

   render() {
      return <MuiThemeProvider>
         <NavigationBar />
      </MuiThemeProvider>
   }

};
