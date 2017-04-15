import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { AppContainer } from 'react-hot-loader'

import App from './Components/App'
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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Components/App', () => {
    const NextApp = require('./Components/App').default;
    ReactDOM.render(
      <AppContainer>
         <Provider store={store}>
            <NextApp/>
         </Provider>,
      </AppContainer>,
      document.getElementById('root')
    );
  });
}


