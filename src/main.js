import "babel-polyfill"
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import rootSaga from './sagas'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import { INITIAL_STATE } from './core'

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
)
sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
