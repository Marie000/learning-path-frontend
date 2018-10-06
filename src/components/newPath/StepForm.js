import React, { Component } from 'react';
import {Paper, TextField, FlatButton, SelectField, MenuItem, Checkbox} from 'material-ui';
import Path from '../paths/Path';
import CreateChecklist from './CreateChecklist';

const initialState = {
  title: '',
  description: '',
  url: '',
  type: '',
  optional: false,
  timeEstimate: 0,
  checklist: []
};

export default class StepForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.currentStep.title || '',
      description: this.props.currentStep.description || '',
      url: this.props.currentStep.url || '',
      type: this.props.currentStep.type || '',
      optional: this.props.currentStep.optional || false,
      timeEstimate: this.props.currentStep.optional || 0,
      checklist: this.props.currentStep.checklist || []
    }
    this.newStep = this.newStep.bind(this);
    this.finishPath = this.finishPath.bind(this);
    this.handleType = this.handleType.bind(this);
    this.addToChecklist = this.addToChecklist.bind(this);
    this.updateCheck = this.updateCheck.bind(this);
  }

  handleChange(type, e) {
    let change = {};
    change[type] = e.target.value;
    this.setState(change);
  }

  handleType(e, index, value) {
    this.setState({type: value});
  }

  newStep() {
    this.props.addStep(this.state);
    this.setState(initialState);
  }

  finishPath() {
    this.props.addStep(this.state);
    this.setState(initialState);
    this.props.closeStepForm();
  }

  addToChecklist(item) {
    let checklist = this.state.checklist;
    checklist.push({question: item});
    this.setState({checklist});
  }

  updateCheck() {
    this.setState({optional: !this.state.optional});
  }

  render() {
    const editing = !!this.props.currentStep.title;
    console.log('editing? ', editing);
    return (
      <Paper>
        <h3> Create a Step: </h3>
        <form>
          <TextField hintText="title"
                     value={this.state.title}
                     onChange={this.handleChange.bind(this, 'title')}/>
          <br />
          <TextField hintText="General description of this step"
                     value={this.state.description}
                     multiLine
                     rows={3}
                     onChange={this.handleChange.bind(this, 'description')}/>
          <br />
          <TextField hintText="http://..."
                     value={this.state.url}
                     onChange={this.handleChange.bind(this, 'url')}/>
          <br />
          <SelectField floatingLabelText="Type of resource"
                       value={this.state.type}
                       onChange={this.handleType} >
            <MenuItem value="video" primaryText="Video" />
            <MenuItem value="blog" primaryText="Blog/article" />
            <MenuItem value="wiki" primaryText="Wiki" />
            <MenuItem value="project" primaryText="Project" />
            <MenuItem value="book" primaryText="Book" />
          </SelectField>
          <br />
          <Checkbox
            label="Optional"
            checked={this.state.optional}
            onCheck={this.updateCheck}
          />
          <br />
          <TextField hintText="time estimate (in hours)"
                     value={this.state.timeEstimate}
                     onChange={this.handleChange.bind(this, 'timeEstimate')}/>
          <br />
          Checklist:
          <ul>
            {this.state.checklist.map((item, index) => <li key={index}>{item.question}</li>)}
          </ul>
          <CreateChecklist addToChecklist={this.addToChecklist} clearChecklist={this.clearChecklist} />
          {editing ?
            <FlatButton onClick = {this.props.updateStep.bind(this, this.state)}>Save</FlatButton>
          :
            <div>
              <FlatButton onClick = {this.newStep}>One more step</FlatButton>
              <FlatButton onClick = {this.finishPath}>Finish Path</FlatButton>
            </div>
          }
        </form>
      </Paper>
    )
  }
}
