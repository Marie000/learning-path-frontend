import React from 'react';
import {Checkbox, RaisedButton, TextField, Table, TableBody} from 'material-ui';
import StepChecklistItem from './StepChecklistItem';

const StepContentPrivate = ({step}) => {
  return (
    <div>
      <p>{step.description}</p>
      <a href = {step.url}><RaisedButton secondary>Link</RaisedButton></a>
      <br /><br />

      <div>
        <h5>What you should have learned:</h5>
        <Table>
          <TableBody>
            {step.checklist.map((item, index) => <StepChecklistItem key={index} item={item} />)}
          </TableBody>
        </Table>
      </div>
      <div>
        Notes:
        <TextField fullWidth multiLine rows={3} hintText="your general notes on this step" />
        <RaisedButton secondary>Save Notes</RaisedButton>
      </div>
      <br /><br />
      <RaisedButton primary fullWidth label="Mark as done"/>
    </div>
  );
};

export default StepContentPrivate;
