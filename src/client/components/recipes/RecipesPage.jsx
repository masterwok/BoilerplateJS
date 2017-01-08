import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchView from 'components/common/SearchView';
import RecipeResultItem from 'components/recipes/RecipeResultItem';
import * as recipeActions from 'actions/recipeActions';


class RecipesPage extends Component {
   constructor(props) {
      super(props);

      this.searchRecipes = this.searchRecipes.bind(this);
   }

   searchRecipes(event) {
      this.props.recipeActions.queryRecipes(event.target.value);
   }

   render() {
      return (<SearchView
         hintText='Search'
         floatingLabelText='Find Recipes'
         search={this.searchRecipes}
         items={this.props.recipes}
         itemComponent={RecipeResultItem}
         />);
   }
}

RecipesPage.propTypes = {
   recipeActions: PropTypes.object,
   recipes: PropTypes.array
};

const mapStateToProps = (state) => {
   return {
      recipes: state.recipes
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      recipeActions: bindActionCreators(recipeActions, dispatch)
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);
