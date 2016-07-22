import "babel-polyfill"
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import rootSaga from './sagas'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware, logger)(createStore)
const store = createStoreWithMiddleware(rootReducer)
store.runSaga = sagaMiddleware.run
store.runSaga(rootSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
