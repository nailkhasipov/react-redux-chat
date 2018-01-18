import { takeEvery } from 'redux-saga/effects';
import { ADD_USER,
  SEND_MESSAGE, 
  USERS_LIST, 
  messageReceived, 
  populateUsersList } from './actions';

export const setupSocket = (dispatch, username) => {
  //@TODO move to ENV
  const socket = new WebSocket('ws://localhost:9000');

  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: ADD_USER,
      name: username
    }));
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case SEND_MESSAGE:
        dispatch(messageReceived(data.text, data.author));
        break;
      case USERS_LIST:
        dispatch(populateUsersList(data.users));
        break;
      default:
        break;
    }
  };

  return socket;
};

export const handleSendMessage = function* handleSendMessage(params) {
  yield takeEvery(SEND_MESSAGE, (action) => {
    action.author = params.username;
    params.socket.send(JSON.stringify(action));
  });
};