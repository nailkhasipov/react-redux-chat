export const ADD_MESSAGE = 'ADD_MESSAGE';
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const ADD_USER = 'ADD_USER';
export const USERS_LIST = 'USERS_LIST';

export function addMessage(message, author) {
  return { 
    type: ADD_MESSAGE,
    message,
    author
  };
}

export function messageReceived(message, author) {
  return { 
    type: MESSAGE_RECEIVED,
    message,
    author
  };
}

export function addUser(name) {
  return { 
    type: ADD_USER,
    name
  };
}

export function populateUsersList(users) {
  return { 
    type: USERS_LIST,
    users
  };
}