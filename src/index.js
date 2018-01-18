import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
// import chat from './reducers';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// const username = prompt('Введите имя пользователя');
// const socket = new WebSocket('ws://localhost:9000');

// socket.onopen = () => {
//   socket.send(JSON.stringify({
//     type: 'ADD_USER',
//     name: username
//   }));
// };

// socket.onmessage = (event) => {
//   const data = JSON.parse(event.data)
//   switch (data.type) {
//     case 'USERS_LIST':
//       populateUsers(data.users);
//       break;
//     case 'ADD_MESSAGE':
//       document.querySelector('#message-list').innerHTML += `<li>${data.name}: ${data.message}</li>`;
//       break;
//     default:
//       break;
//   }
// };

// function populateUsers(users) {
//   document.querySelector('#users').innerHTML = '';
//   users.forEach(user => {
//     document.querySelector('#users').innerHTML += `<li>${user.name}</li>`;
//   });
// }

// function sendMessage() {
//   const message = document.querySelector('#message').value;
//   document.querySelector('#message-list').innerHTML += `<li>${username}: ${message}</li>`;
//   socket.send(JSON.stringify({
//     type: 'ADD_MESSAGE',
//     message: message,
//     name: username
//   }));
// }