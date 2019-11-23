const  app = require('./app');
const io = require('socket.io');
const socketPort = 5001;
const httpPort = 5000;
const socketServer = io.listen(socketPort);

app.listen(httpPort, function(){
  console.log(`Listening to ${httpPort}`);
});

socketServer.on('connection', (socket) => {
    console.log(socket);

    socket.on('start', () => {
        console.log('Start game!');
    });
});