import React, { Component, PropTypes } from 'react';

class ResultsView extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className='row '>
         {this.props.items.map(item => {
            return (
               <div key={item.id} className='col-xs-12 col-sm-6 col-md-4 col-lg-3' style={{ 'paddingTop': '25px' }}>
                  <div className='box'>
                     {this.props.itemComponent(item)}
                  </div>
               </div>
               );
         })}
         </div>
         );
   }

}

ResultsView.propTypes = {
   items: PropTypes.array.isRequired,
   itemComponent: PropTypes.func.isRequired
};

export default ResultsView;
