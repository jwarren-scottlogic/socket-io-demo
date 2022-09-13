const express = require('express');
const app = express();

const { createServer } = require('http');
const httpServer = createServer(app);


//sorts out CORS problems
const { Server } = require('socket.io');
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  }
});


io.on('connection', (socket) => {
    console.log(`client ${socket.id} connected to socket.io server`);
    socket.on('sendMessage', (text) => { //this was addMessage, but should be receiving the 'sendMessage' from the chatInput
      io.emit('addMessage', text);
    });
  });

const port = 8081;
httpServer.listen(port, () => {
  console.log(`socket.io server listening on port ${port}`);
})