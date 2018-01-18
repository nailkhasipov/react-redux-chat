import { combineReducers } from 'redux';
import {
  SEND_MESSAGE,
  MESSAGE_RECEIVED,
  ADD_USER,
  USERS_LIST
} from './actions';

function users(state = [], action) {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        {
          name: action.name
        }
      ];
    case USERS_LIST:
      return action.users;
    default:
      return state;
  }
}

function messages (state = [], action) {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return [
        ...state,
        {
          text: action.text
        }
      ];
    case 'MESSAGE_RECEIVED':
      return state.concat([
        {
          message: action.message,
          author: action.author,
          id: action.id
        }
      ]);
    default:
      return state;
  }
}

const chat = combineReducers({
  messages,
  users
});

export default chat;