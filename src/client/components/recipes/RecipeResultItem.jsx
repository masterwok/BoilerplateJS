import React, { Component, PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import 'components/recipes/style/recipeResultItemStyle';

const RecipeResultItem = (props) => {
   // Add random query string to prevent browser from caching results
   const imageUrl = `${props.imageUrl}?${Math.random() * 1000}`;

   return (
      <Card>
         <CardMedia overlay={<CardTitle className='recipe-card-title' title={props.name} subtitle='By: Jonathan Trowbridge' />}>
            <img src={imageUrl} />
         </CardMedia>
         <CardText className='recipe-card-text'>{props.description}</CardText>
      </Card>
      );
};

RecipeResultItem.propTypes = {
   imageUrl: PropTypes.string,
   name: PropTypes.string,
   description: PropTypes.description
};

export default RecipeResultItem;
