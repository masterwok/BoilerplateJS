import React from 'react';
import App from 'client/components/App';
import SearchRecipes from 'client/components/recipes/Search';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

export default(
   <Router history={browserHistory}>
      <Route path='/' component={App}>
         <IndexRoute component={SearchRecipes}/>
      </Route>
   </Router>
);
