import React from 'react';
import App from 'components/App';
import SearchRecipes from 'components/recipes/Search';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

export default(
   <Router history={browserHistory}>
      <Route path='/' component={App}>
         <IndexRoute component={SearchRecipes}/>
      </Route>
   </Router>
);
