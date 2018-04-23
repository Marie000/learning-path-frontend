import {Step, RaisedButton, StepButton, StepContent} from 'material-ui';
import StepIcon from './StepIcon';
import StepContentPublic from './StepContentPublic';
import StepContentPrivate from '../learningDashboard/StepContentPrivate';
import React, { Component } from 'react';

export default class SingleStep extends Component {
  constructor() {
    super();
    this.state={active: false};
    this.toggleActive = this.toggleActive.bind(this);
  }
  toggleActive() {
    this.setState({active: !this.state.active});
  }
  render() {
    let step = this.props.step;
    let optional = step.optional ? " (optional) " : " ";
    return (
      <Step>
        <StepButton onClick={this.toggleActive} icon={<StepIcon type= {step.type} />}>
          <h4>{step.title + optional + " "}</h4>
        </StepButton>

        <StepContent active = {this.state.active}>
          {this.props.public ?
          <StepContentPublic step={step} />
          :
          <StepContentPrivate step={step} />
          }
        </StepContent>
      </Step>
    );
  }
}

