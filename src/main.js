require('./styles/main.css')

import "babel-polyfill"
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

import React from 'react'
import { render } from 'react-dom'

import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import App from './components/App'

let store = createStore(reducers)

const Main = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
);

render(
  <Main />,
  document.getElementById('root')
)
