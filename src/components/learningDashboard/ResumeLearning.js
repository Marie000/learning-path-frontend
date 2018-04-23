import React from 'react';
import {RaisedButton, Paper} from 'material-ui';

const style = {
  padding: "15px"
}

const ResumeLearning = ({user}) => {
  return (
    <Paper style={style}>
      <RaisedButton primary style={{color: "white"}} label="Resume Learning" />

      <p>this will (eventually) take you to the latest updated learning step</p>
    </Paper>
  );
};

export default ResumeLearning;
