import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg'
import '../css/style.css'

import injectTapEventPlugin from 'react-tap-event-plugin';

//material-ui components
import { AppBar,
         TextField } from 'material-ui/';

//theme related material-ui
import { MuiThemeProvider,
         getMuiTheme,
         darkBaseTheme } from 'material-ui/styles'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React with Material UI Boilerplate</h2>
          </div>
            <TextField
              hintText="Type something here"
              floatingLabelText="This is a text field from App component"
            />

           {/* Render children here*/}
           {this.props.children} 
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
