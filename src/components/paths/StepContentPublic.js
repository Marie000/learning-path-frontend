import React from 'react';
import {RaisedButton} from 'material-ui';

const StepContentPublic = ({step}) => {
  return (
    <div>
    <p>{step.description}</p>
          <a href = {step.url}><RaisedButton secondary label="Link"/></a>
          <br /><br />

          <div>
            <h5>What you will learn:</h5>
            {step.checklist.map((item, index) => <div key={index}><i className="far fa-check-square"></i> {item}</div>)}
          </div>
    </div>
  );
};

export default StepContentPublic;
