import React from 'react';
import {Checkbox, RaisedButton, TextField, TableRow, TableRowColumn} from 'material-ui';


function StepChecklistItem({item}) {
  return (
    <TableRow>
      <TableRowColumn>
      <Checkbox label={item} />
      </TableRowColumn>

      <TableRowColumn>
        Notes:
        <TextField multiLine fullWidth hintText={"notes on " + item} />
      </TableRowColumn>

      <TableRowColumn>
        <RaisedButton secondary>Save notes</RaisedButton>
      </TableRowColumn>
    </TableRow>
  )
}

export default StepChecklistItem
