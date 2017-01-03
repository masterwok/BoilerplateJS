import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

export default class Search extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return <div className='row center-xs'>
         <div className='col-xs-12 col-sm-10 col-md-7 col-lg-6'>
            <div className='box'>
               <TextField hintText='Search' floatingLabelText='Find Recipes' fullWidth={true}/>
            </div>
         </div>
      </div>
   }

};
