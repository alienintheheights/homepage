import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { HashRouter } from 'react-router-dom'

import { AppContainer } from 'react-hot-loader'

import App from './Components/App'
import Home from './Components/Home'
import Tracks from './Components/Music/Tracks'

import appState from './reducers'
import mySaga from './sagas'

// these are parsed by webpack
require('./css/less/main.less');

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store w/ redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  appState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)
// then run the saga
sagaMiddleware.run(mySaga)

// Navigation, Routes, and Auth rules
class DrewHome extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <App/>
        </HashRouter>
      </Provider>
    )
  }
}

ReactDOM.render(
  <DrewHome />,
  document.getElementById('root')
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Components/App', () => {
    const NextApp = require('./Components/App').default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>,
      </AppContainer>,
      document.getElementById('root')
    );
  });
}

