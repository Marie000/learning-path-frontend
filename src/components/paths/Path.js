import {Link} from 'react-router';
import SingleStep from './SingleStep';
import {Card, CardHeader, CardTitle, CardText, RaisedButton, Stepper} from 'material-ui';

import React from 'react';

const cardStyle = {
  fontSize: "20px"
}

const Path = (props) => {
  let path = props.path;
  return (
    <div>
      <Card>
        <CardTitle style={cardStyle}
                   title={path.title}
                   subtitle={path.description}
                   actAsExpander
                   showExpandableButton/>
        <CardText expandable={true}>
          <div>Prerequisites: {path.prerequisites}</div>
          <h3>Steps: </h3>
          <Stepper
              linear={false}
              orientation="vertical">
            {path.steps.map((step, index) => <SingleStep public={props.public} key={step.id} step={step} index={index} />)}
          </Stepper>
          <br/>
          {props.public ?
          <RaisedButton primary={true}
                        label="Choose this path"
                        onClick={props.addPathForUser.bind(this, path)} />
          : null}
        </CardText>
      </Card>
      <br /> <br />
    </div>
    )
};

export default Path;

