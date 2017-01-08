import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const SearchField = (props) => {
   return (
      <TextField onChange={props.search} hintText={props.hintText} floatingLabelText={props.floatingLabelText} fullWidth={true}/>
      );
};

SearchField.propTypes = {
   search: PropTypes.func.isRequired,
   hintText: PropTypes.string.isRequired,
   floatingLabelText: PropTypes.string.isRequired
};

export default SearchField;
