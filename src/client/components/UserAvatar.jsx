import React from 'react';
import Avatar from 'material-ui/Avatar';

export default class UserAvatar extends React.Component {
   constructor(props) {
      super(props);

      this.size = this.props.size || 30;
   }

   render() {
      return <Avatar
         src={`http://graph.facebook.com/v2.8/${this.props.user.facebook.id}/picture?width=${this.size}&height=${this.size}`}
         size={this.size}/>;
   }
}
