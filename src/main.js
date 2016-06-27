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

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'

import reducers from './reducers'
import App from './components/App'
import NoteList from './components/NoteList'
import NoteShow from './components/NoteShow'
import NoteAdd from './components/NoteAdd'

const middleware = routerMiddleware(browserHistory)

let store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  applyMiddleware(middleware)
)

const history = syncHistoryWithStore(browserHistory, store)

const Main = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={NoteList}/>
          <Route path="/add" component={NoteAdd} />
          <Route path="/:id" component={NoteShow} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

render(
  <Main />,
  document.getElementById('root')
)
