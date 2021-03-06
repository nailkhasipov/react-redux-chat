import { takeEvery } from 'redux-saga/effects';
import { ADD_USER, SEND_MESSAGE, UPDATE_USERS_LIST, messageReceived, updateUsersList } from './actions';

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
        dispatch(messageReceived(data.text, data.author, data.date));
        break;
      case UPDATE_USERS_LIST:
        dispatch(updateUsersList(data.users));
        break;
      default:
        break;
    }
  };

  return socket;
};

export const handleSendMessage = function* handleSendMessage(params) {
  yield takeEvery(SEND_MESSAGE, (action) => {
    params.socket.send(JSON.stringify(action));
  });
};