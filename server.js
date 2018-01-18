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
  ws.on('message', (message) => {
    const data = JSON.parse(message);
    switch (data.type) {
      case 'ADD_USER': {
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
      case 'ADD_MESSAGE':
        broadcast({
          type: 'ADD_MESSAGE',
          message: data.message,
          name: data.name
        }, ws);
        break;
      default:
        break;
    }
  });

  // opened issue with Chrome 63 https://github.com/websockets/ws/issues/1256
  ws.on('error', () => {});
});

server.listen(9000, () => console.log('Listening on %d', server.address().port));