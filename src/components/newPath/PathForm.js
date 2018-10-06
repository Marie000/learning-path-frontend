import React, { Component } from 'react';
import {TextField, Paper, FlatButton} from 'material-ui';
import {browserHistory} from 'react-router';

export default class PathForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.currentPath.title || '',
      description: props.currentPath.description || '',
      start: props.currentPath.start || '',
      goal: props.currentPath.goal || ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.currentPath) {
      this.setState({
        title: nextProps.currentPath.title,
        description: nextProps.currentPath.description,
        start: nextProps.currentPath.start,
        goal: nextProps.currentPath.goal
      });
    }
  }

  handleChange(type, e) {
    let change = {};
    change[type] = e.target.value;
    this.setState(change);
  }

  handleSubmit() {
    this.props.handleCreatePath(this.state);
  }

  handleUpdate() {
    let path = this.state;
    path.id = this.props.currentPath.id;
    this.props.editPath(path);
  }

  render() {
    return (
      <div>
        <h2> Create a {this.props.private ? 'Private' : 'Public'} Path: </h2>
        <h3> Basic information: </h3>
        <form>
          <TextField hintText="title"
                     value={this.state.title}
                     onChange={this.handleChange.bind(this, 'title')}/>
          <br />
          <TextField hintText="General description of your path"
                     value={this.state.description}
                     multiLine
                     rows={3}
                     onChange={this.handleChange.bind(this, 'description')}/>
          <br />
          <TextField hintText="Description of the starting point for your learners (previous knowledge, etc.)"
                     value={this.state.start}
                     multiLine
                     rows={3}
                     onChange={this.handleChange.bind(this, 'start')}/>
          <br />
          <TextField hintText="The goal to be achieved through this learning path"
                     value={this.state.goal}
                     multiLine
                     rows={3}
                     onChange={this.handleChange.bind(this, 'goal')}/>
          <br />
          {this.props.editing ?
            <div>
              <FlatButton onClick={this.handleUpdate}>
                Save
              </FlatButton>
            </div>
            :
            <FlatButton onClick = {this.handleSubmit}>
              Continue to create steps
            </FlatButton>
          }
        </form>
      </div>
    )
  }
}

