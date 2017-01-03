import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppContainer from 'client/components/AppContainer';
import SearchRecipes from 'client/components/recipes/Search';
import {
   Router,
   Route,
   Link,
   IndexRoute,
   hashHistory,
   browserHistory
} from 'react-router'

export default class App extends Component {
   constructor(props) {
      super(props);

      injectTapEventPlugin();
   }

   render() {
      return <Router history={hashHistory}>
         <Route path='/' component={AppContainer}>
            <IndexRoute component={SearchRecipes}/>
         </Route>
      </Router>;
   }

};
