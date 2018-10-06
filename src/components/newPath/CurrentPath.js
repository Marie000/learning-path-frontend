import React from 'react';
import {Paper} from 'material-ui';
import CurrentStep from './CurrentStep'

const CurrentPath = (props) => {
  const path = props.path
  path.steps = path.steps || [];
  return (
    <Paper>
      <h2>Title: {path.title}</h2>
      <p>Description: {path.description}</p>
      <p>Starting Point: {path.start}</p>
      <p>Goals: {path.goals}</p>
      <h3>Steps: </h3>
      <ol>
      {path.steps.map((step, index) => <CurrentStep step={step}
                                                    key={index}
                                                    creating={props.creating}
                                                    selectCurrentStep={props.selectCurrentStep} />)}
      </ol>
    </Paper>
  );
};

export default CurrentPath;
