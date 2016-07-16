require('./styles/main.css')

import 'babel-polyfill'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

import React from 'react'
import { render } from 'react-dom'

import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import sagas from './sagas/index'

// Routable components
import App from './components/App'
import NoteList from './components/NoteList'
import NoteShow from './components/NoteShow'
import NoteEdit from './components/NoteEdit'
import NoteAdd from './components/NoteAdd'

const middleware = routerMiddleware(browserHistory)
const sagaMiddleware = createSagaMiddleware()

let store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  applyMiddleware(middleware, sagaMiddleware)
)

sagaMiddleware.run(sagas)

const history = syncHistoryWithStore(browserHistory, store)

const Main = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={NoteList}/>
          <Route path="/add" component={NoteAdd} />
          <Route path="/:id" component={NoteShow} />
          <Route path="/:id/edit" component={NoteEdit} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
)

render(
  <Main />,
  document.getElementById('root')
)
