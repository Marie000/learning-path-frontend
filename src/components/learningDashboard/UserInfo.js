import React from 'react';
import {Paper} from 'material-ui';

const style = {
  margin: "30px 0",
  padding: "10px 20px 20px 20px"
}

const UserInfo = ({user}) => {
  if (user) {
    return (
      <Paper style={style}>
        <h3>Your user Info: </h3>
        <br />
        Hello {user.user_name}!!
      </Paper>
    );
  } else {
    return <div></div>
  }

};

export default UserInfo;
