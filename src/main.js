require('./styles/main.css')

import "babel-polyfill"
import injectTapEventPlugin from 'react-tap-event-plugin'

import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const Main = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <App />
  </MuiThemeProvider>
);

render(
  <Main />,
  document.getElementById('root')
)
