import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as pathActions from '../../actions/pathActions';
//import * as stepActions from '../../actions/stepActions';
import CreatePageOne from './CreatePageOne';

class NewPathPage extends Component {
  render() {
    return (
      <CreatePageOne createPath={this.props.createPath} updatePath={this.props.updatePath} />
    );
  }
}

function mapStateToProps(state) {
  return {

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
    createStep: (step) => {
      //dispatch(stepActions.createStep)
    }
    //addPathForUser: (path) => {
    //  dispatch(userActions.addPathForUser(path));
   // }
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPathPage);
