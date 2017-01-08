import React from 'react';
import App from 'components/App';
import RecipesPage from 'components/recipes/RecipesPage';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

export default(
   <Router history={browserHistory}>
      <Route path='/' component={App}>
         <IndexRoute component={RecipesPage}/>
      </Route>
   </Router>
);
