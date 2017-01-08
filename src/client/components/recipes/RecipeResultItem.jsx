import React, { Component, PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const RecipeResultItem = (props) => {
   const imageUrl = `${props.imageUrl}?${Math.random() * 1000}`;

   return (
      <Card>
    <CardMedia
      overlay={<CardTitle title={props.name} titleStyle={{ 'textAlign': 'left', 'whiteSpace': 'nowrap', overflow: 'hidden', 'textOverflow': 'ellipsis'}} subtitle="Overlay subtitle" />}
      >
      <img src={imageUrl} />
    </CardMedia>
    <CardText style={{ height: '100px', overflow: 'hidden'}}>{props.description}</CardText>
  </Card>
      );
};

export default RecipeResultItem;
