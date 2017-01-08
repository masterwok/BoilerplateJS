import React, { Component, PropTypes } from 'react';
import ResultsView from 'components/common/ResultsView';
import SearchField from 'components/common/SearchField';

const SearchView = (props) => {
   return (
      <div>
         <div className='row center-xs'>
            <div className='col-xs-12 col-sm-10 col-md-7 col-lg-6'>
               <div className='box'>
                  <SearchField search={props.search} hintText={props.hintText} floatingLabelText={props.floatingLabelText}/>
               </div>
            </div>
         </div>
         <ResultsView items={props.items} itemComponent={props.itemComponent}/>
      </div>
      );
};

SearchView.propTypes = {
   search: PropTypes.func.isRequired,
   hintText: PropTypes.string.isRequired,
   floatingLabelText: PropTypes.string.isRequired,
   items: PropTypes.array.isRequired,
   itemComponent: PropTypes.func.isRequired
};

export default SearchView;
