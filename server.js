'use strict';

const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();

app.use(express.static('public'));

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const users = [];

const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data));
    }
  });
};

wss.on('connection',(ws) => {
  let index;
  ws.on('message', (message) => {
    const data = JSON.parse(message);
    switch (data.type) {
      case 'ADD_USER': {
        index = users.length;
        users.push({ name: data.name });
        ws.send(JSON.stringify({
          type: 'USERS_LIST',
          users
        }));
        broadcast({
          type: 'USERS_LIST',
          users
        }, ws);
        break;
      }
      case 'SEND_MESSAGE':
        broadcast({
          type: 'SEND_MESSAGE',
          text: data.text,
          author: data.author
        }, ws);
        break;
      default:
        break;
    }
  });

  ws.on('close', () => {
    users.splice(index, 1);
    broadcast({
      type: 'USERS_LIST',
      users
    }, ws);
  });

  // opened issue with Chrome 63 https://github.com/websockets/ws/issues/1256
  ws.on('error', () => {});
});

server.listen(9000, () => console.log('Listening on %d', server.address().port));