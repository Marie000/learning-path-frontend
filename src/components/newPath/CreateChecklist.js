import React, { Component } from 'react';
import {TextField, FlatButton} from 'material-ui';

export default class CreateChecklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleInput(e) {
    this.setState({currentItem: e.target.value});
  }

  handleSave() {
    this.props.addToChecklist(this.state.currentItem);
    this.setState({currentItem: ''});
  }

  render() {
    return (
      <div>
        <TextField hintText="title"
                   value={this.state.currentItem}
                   onChange={this.handleInput}/>
        <FlatButton onClick={this.handleSave}>
          Save
        </FlatButton>
      </div>
    )
  }
}
