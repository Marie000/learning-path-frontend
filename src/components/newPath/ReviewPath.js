import React from 'react';
import Path from '../paths/Path';
import {FlatButton} from 'material-ui';
import CurrentPath from './CurrentPath';

function ReviewPath(props) {
  return (
    <div>
      <h2>Your path: </h2>
      <CurrentPath path={props.path} selectCurrentStep={props.selectCurrentStep} public creating />
      <FlatButton onClick={props.openPathForm} label="edit main path information" />
      <FlatButton onClick={props.openStepForm} label="add a step" />
      <FlatButton onClick={props.finishPath}>Finish Path</FlatButton>
    </div>
  )
}

export default ReviewPath;
