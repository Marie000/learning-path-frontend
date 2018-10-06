import React from 'react';
import {RaisedButton} from 'material-ui';

const StepContentPublic = ({step}) => {
  return (
    <div>
      <p>{step.description}</p>
      <a href = {step.url}><RaisedButton secondary label="Link"/></a>
      <br /><br />
      <p>Time estimate: {step.timeEstimate} hours</p>
      {step.checklist ?
      <div>
        <h5>Your checklist for this step:</h5>
        {step.checklist.map((item, index) => <div key={index}><i className="far fa-check-square"></i> {item.question}</div>)}
      </div>
      : null }
    </div>
  );
};

export default StepContentPublic;
