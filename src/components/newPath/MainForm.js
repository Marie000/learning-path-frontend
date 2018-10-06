import React, { Component } from 'react';
import PathForm from './PathForm';
import StepForm from './StepForm';
import ReviewPath from './ReviewPath';
import Modal from 'react-modal';
import {Paper, FlatButton} from 'material-ui';
import Path from '../paths/Path';

export default class MainForm extends Component {
  constructor() {
    super();
    this.state = {
      pathFormOpen: true,
      stepFormOpen: false,
      currentStep: {}
    }
    this.handleCreatePath = this.handleCreatePath.bind(this);
    this.openPathForm = this.openPathForm.bind(this);
    this.closePathForm = this.closePathForm.bind(this);
    this.openStepForm = this.openStepForm.bind(this);
    this.closeStepForm = this.closeStepForm.bind(this);
    this.selectCurrentStep = this.selectCurrentStep.bind(this);
  }

  handleCreatePath(path) {
    this.setState({pathFormOpen: false, stepFormOpen: true});
    this.props.createPath(path);
  }

  openPathForm() {
    this.setState({pathFormOpen: true});
  }

  closePathForm() {
    this.setState({pathFormOpen: false});
  }

  openStepForm(step) {
    this.setState({stepFormOpen: true, currentStep: step});
  }

  closeStepForm() {
    this.setState({stepFormOpen: false, currentStep: {}});
  }

  selectCurrentStep(step) {
    this.setState({currentStep: step, stepFormOpen: true});
  }

  render() {
    return <div>
        <Modal
          isOpen={this.state.pathFormOpen}
          onRequestClose={this.closePathForm}
        >
          <PathForm currentPath={this.props.currentPath}
                    handleCreatePath={this.handleCreatePath}
                    editPath={this.props.editPath}
                    private={this.props.private}
                    editing={this.props.editing}
                    closeStepForm={this.closeStepForm}
                    />
          <FlatButton label="close" onClick={this.closePathForm} />
        </Modal>

        <Modal isOpen={this.state.stepFormOpen}
               onRequestClose={this.closeStepForm}>
          <StepForm currentPath={this.props.currentPath}
                    addStep = {this.props.addStep}
                    updateStep = {this.props.updateStep}
                    closeStepForm={this.closeStepForm}
                    currentStep={this.state.currentStep} />
        </Modal>

        <ReviewPath path={this.props.path}
                    finishPath={this.props.finishPath}
                    openPathForm={this.openPathForm}
                    openStepForm={this.openStepForm}
                    selectCurrentStep={this.selectCurrentStep}
                    />
      </div>
  }
}
