import React from 'react';
import {FlatButton} from 'material-ui';

const CurrentStep = (props) => {
  let step = props.step;
  step.checklist = step.checklist || [];
  return (
    <li>
      <h4> Title: {step.title}</h4>
      <p>Description: {step.description}</p>
      <p>Url: {step.url}</p>
      <p>Type: {step.type}</p>
      <p>Time estimate: {step.timeEstimate} hours</p>
      <h5>Questions / Checklist Items</h5>
      <ul>
        {step.checklist.map((item, index) => <li key={index}>{item.question}</li>)}
      </ul>
      <FlatButton label="Edit step" onClick={props.selectCurrentStep.bind(this, step)} />
    </li>
  );
};

export default CurrentStep;
