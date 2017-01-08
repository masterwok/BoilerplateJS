import React, { PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';

const UserAvatar = (props) => {
   const size = props.size || 30;

   return (
      <Avatar
      src={`http://graph.facebook.com/v2.8/${props.user.facebook.id}/picture?width=${size}&height=${size}`}
      size={size}/>
      );
};

UserAvatar.propTypes = {
   size: PropTypes.number,
   user: PropTypes.object.isRequired
};

export default UserAvatar;
