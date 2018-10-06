import {Link} from 'react-router';
import SingleStep from './SingleStep';
import {Card, CardHeader, CardTitle, CardText, RaisedButton, Stepper} from 'material-ui';

import React from 'react';

const cardStyle = {
  fontSize: "20px"
}

const Path = (props) => {
  let path = props.path;
  path.steps = path.steps || [];

  return (
    <div>
      <Card expanded={props.creating}>
        <CardTitle style={cardStyle}
                   title={path.title}
                   subtitle={path.description}
                   actAsExpander
                   showExpandableButton={!props.creating}/>
        <CardText expandable={true}>
          <div>Starting Point: {path.start}</div>
          <div>Goal: {path.goal}</div>
          <h3>Steps: </h3>
          <Stepper
              linear={false}
              orientation="vertical">
            {path.steps.map((step, index) => <SingleStep public={props.public} key={index} step={step} index={index} />)}
          </Stepper>
          <br/>
          {props.public && !props.creating ?
          <RaisedButton primary
                        label="Choose this path"
                        onClick={props.addPathForUser.bind(this, path)} />
          : null}
          {props.creating ?
          null :
          <RaisedButton label="edit this path"
                        onClick={props.editPath.bind(this, path.id)} />
          }

        </CardText>
      </Card>
      <br /> <br />
    </div>
    )
};

export default Path;

