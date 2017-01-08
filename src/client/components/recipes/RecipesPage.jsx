import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import ResultsView from 'components/common/ResultsView';
import RecipeResultItem from 'components/recipes/RecipeResultItem';


class RecipesPage extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div>
            <div className='row center-xs'>
               <div className='col-xs-12 col-sm-10 col-md-7 col-lg-6'>
                  <div className='box'>
                     <TextField hintText='Search' floatingLabelText='Find Recipes' fullWidth={true}/>
                  </div>
               </div>
            </div>
            <ResultsView items={this.props.recipe} itemComponent={RecipeResultItem}/>
         </div>
         );
   }
}

RecipesPage.propTypes = {
   recipe: PropTypes.array
};

const mapStateToProps = (state) => {
   return {
      recipe: state.recipe
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      // navigationActions: bindActionCreators(navigationActions, dispatch)
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);
