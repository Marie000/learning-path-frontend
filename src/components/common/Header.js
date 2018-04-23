import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
import { Toolbar, ToolbarGroup, AppBar, ToolbarSeparator, RaisedButton} from 'material-ui';
import Auth from '../../auth/Auth';
const auth = new Auth();

const linkstyle = {
  color: "white",
  textDecoration: "none",
  fontFamily: "Roboto, sans-serif",
  fontSize: "20px",
  ":visited, :active": {
    color: "white",
    textDecoration: "none"
  },
  ":hover" :{
    textDecoration: "none",
    color: "white"
  }
};

class Header extends React.Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
  }

  login() {
    auth.login();
  }

  render() {
    return (
      <div>
      <Toolbar>
          <ToolbarGroup>
            <Link style={linkstyle} to="/">Home</Link>
          </ToolbarGroup>

          <ToolbarGroup>
            <Link style={linkstyle} to="/paths">Paths</Link>
          </ToolbarGroup>

          <ToolbarGroup>
            <Link style={linkstyle} to="/learning">Learning Dashboard</Link>
          </ToolbarGroup>

          <ToolbarGroup>
            <RaisedButton onClick={this.login}>Login</RaisedButton>
          </ToolbarGroup>
        </Toolbar>
      </div>

      );
  }
}

export default Header;
