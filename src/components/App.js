// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    "primary1Color": "#673ab7",
    "primary2Color": "#9575cd",
    "accent1Color": "#8bc34a",
    "accent2Color": "#b2ff59",
    "pickerHeaderColor": "#673ab7"
  },
  toolbar: {
    backgroundColor: "#673ab7",
    color: "white"
  }
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div className="container-fluid">
        <Header
          loading={this.props.loading}
        />
        {this.props.children}
      </div>
      </MuiThemeProvider>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
