import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import UserInfo from './UserInfo';
import PathList from '../paths/PathList';
import ResumeLearning from './ResumeLearning';

class LearningDashboardPage extends Component {
  render() {
    return (
      <div>
        <UserInfo user={this.props.user} />
        <ResumeLearning user={this.props.user} />
        <h3>Your Paths: </h3>
        <PathList user={this.props.user}
                  paths={this.props.user.paths}
                  removePathForUser={this.props.removePathForUser}
                  public={false} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removePathForUser: (pathId) => {
      dispatch(userActions.removePathForUser(pathId));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LearningDashboardPage);
