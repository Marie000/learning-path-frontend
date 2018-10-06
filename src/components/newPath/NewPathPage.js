import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as pathActions from '../../actions/pathActions';
//import * as stepActions from '../../actions/stepActions';
import MainForm from './MainForm';
import {browserHistory} from 'react-router';

class NewPathPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 0, // 0: closed 1: create path, 2: create step, 3: review
      path: {},
      step: 0 // used for editing existing path
    };

    this.createPath = this.createPath.bind(this);
    this.addStep = this.addStep.bind(this);
    this.finishPath = this.finishPath.bind(this);
    this.updateStep = this.updateStep.bind(this);
  }

  componentWillMount() {
    if (this.props.route.editing) {
      this.props.getPath(this.props.params.id)
    }
  }

  createPath(path) {
    path.public = !this.props.route.private;
    this.setState({path});
    this.props.createPath(path);
  }

  addStep(step) {
    let path = this.state.path;
    path.steps = path.steps || [];
    path.steps.push(step);
    this.setState({path})
    this.props.addStepToPath(this.props.currentPath, step);
  }

  finishPath() {
    this.props.confirmPath(this.props.currentPath);
    this.setState({stage: 0, path: {}});
    browserHistory.push('/paths');
  }

  updatePath(path) {
    this.props.updatePath(path);
  }

  updateStep(step) {
    this.props.updateStep(step);
  }


  render() {
    return <MainForm currentPath={this.props.currentPath}
              createPath={this.createPath}
              addStep={this.addStep}
              finishPath={this.finishPath}
              private={this.props.route.private}
              editing={this.props.route.editing}
              path={this.state.path}
              stage={this.state.stage}
              updatePath={this.updatePath}
              updateStep={this.updateStep}

    />
  }
}

function mapStateToProps(state) {
  return {
    currentPath: state.currentPath
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createPath: (path) => {
      dispatch(pathActions.createPath(path));
    },
    updatePath: (path) => {
      dispatch(pathActions.updatePath(path));
    },
    updateStep: (step) => {
      dispatch(pathActions.updateStep(step));
    },
    addStepToPath: (path, step) => {
      dispatch(pathActions.addStepToPath(path, step));
    },
    confirmPath: (path) => {
      dispatch(pathActions.confirmPath(path));
    },
    getPath: (id) => {
      dispatch(pathActions.getPath(id));
    }
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPathPage);
