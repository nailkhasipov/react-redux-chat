import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import reducers from './reducers';
import { login } from './actions';
import { setupSocket, handleSendMessage } from './sockets';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

do {
  var username = prompt('Pick a username!');
} while (!username);

store.dispatch(login(username));

const socket = setupSocket(store.dispatch, username);
sagaMiddleware.run(handleSendMessage, { socket });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);