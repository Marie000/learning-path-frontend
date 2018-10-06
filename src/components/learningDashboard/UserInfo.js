import React from 'react';
import {Paper, RaisedButton} from 'material-ui';
import {Link} from 'react-router';

const style = {
  margin: "30px 0",
  padding: "10px 20px 20px 20px"
}

const UserInfo = ({user}) => {
  console.log(user)
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
