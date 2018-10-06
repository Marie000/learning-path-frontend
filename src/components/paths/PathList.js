import React, {PropTypes} from 'react';
import Path from './Path';
import {RaisedButton} from 'material-ui';
import {Link} from 'react-router';

const PathList = (props) => {
  let paths = props.paths;
  console.log(paths)
  if (paths) {
    return (<div>
      {props.public ?
      <Link to="/create-path"><RaisedButton label="Create Path" secondary/></Link>
      :
      <Link to="/create-private-path"><RaisedButton label="Create Private Path" secondary/></Link>}

      <br /><br />
      {paths.map((path, index) =>
        <Path key={index}
              path={path}
              editPath={props.editPath}
              addPathForUser={props.addPathForUser}
              removePathFromUser={props.removePathFromUser}
              public={props.public}/>
      )}
    </div>)
  } else {
    return (
      <div>
        {props.public ?
          <Link to="/create-path"><RaisedButton label="Create Path" secondary/></Link>
        :
          <Link to="/create-private-path"><RaisedButton label="Create Private Path" secondary/></Link>
        }
        <p> No paths yet!</p>
      </div>
    )
  }

};

export default PathList;
