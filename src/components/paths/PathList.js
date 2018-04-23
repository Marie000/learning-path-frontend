import React, {PropTypes} from 'react';
import Path from './Path';
import {RaisedButton} from 'material-ui';
import {Link} from 'react-router';

const PathList = (props) => {
  let paths = props.paths;
  if (paths) {
    return (<div>
      <Link to="/create-path"><RaisedButton label="Create Path" secondary/></Link>
      <br /><br />
      {paths.map(path =>
        <Path key={path.id}
              path={path}
              addPathForUser={props.addPathForUser}
              removePathFromUser={props.removePathFromUser}
              public={props.public}/>
      )}
    </div>)
  } else {
    return (
      <div> No paths yet!</div>
    );
  }

};

export default PathList;
