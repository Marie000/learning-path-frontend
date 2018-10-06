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

  editPath(id) {
    browserHistory.push('/edit-path/' + id);
  }

  render() {
    if (this.props.paths) {
      return (
        <div>
          <h1>Paths</h1>
          <PathList paths={this.props.paths.filter((path) => path.public)}
                    addPathForUser={this.props.addPathForUser}
                    editPath={this.editPath}
                    public />
        </div>
      );
    }  else {
      return <p> Paths loading... </p>
    }

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
