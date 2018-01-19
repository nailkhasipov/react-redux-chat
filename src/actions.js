export const SEND_MESSAGE = 'SEND_MESSAGE';
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USERS_LIST = 'UPDATE_USERS_LIST';

export function sendMessage(text, date) {
  return { 
    type: SEND_MESSAGE,
    text,
    date
  };
}

export function messageReceived(text, author, date) {
  return { 
    type: MESSAGE_RECEIVED,
    text,
    author,
    date
  };
}

export function addUser(name) {
  return { 
    type: ADD_USER,
    name
  };
}

export function updateUsersList(users) {
  return { 
    type: UPDATE_USERS_LIST,
    users
  };
}