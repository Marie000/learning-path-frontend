import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import * as pathActions from '../../actions/pathActions';
import * as userActions from '../../actions/userActions';
import PathList from './PathList';

class PathPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddPathPage = this.redirectToAddPathPage.bind(this);
  }

  redirectToAddPathPage() {
    browserHistory.push('/path');
  }

  render() {
    return (
      <div>
        <h1>Paths</h1>
        <PathList paths={this.props.paths}
                  addPathForUser={this.props.addPathForUser}
                  public />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    paths: state.paths
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPathForUser: (path) => {
      dispatch(userActions.addPathForUser(path));
    }
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(PathPage);
