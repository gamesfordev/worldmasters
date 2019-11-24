const  app = require('./app');
const io = require('socket.io');
const socketPort = 5001;
const httpPort = 5000;
const socketServer = io.listen(socketPort);
const gameEngine = require('./game-engine');

app.listen(httpPort, function(){
  console.log(`INFO: Listening to ${httpPort}`);
});

socketServer.on('connection', (socket) => {

    gameEngine.init(socketServer);

    socket.on('getSession', () => {
        socket.emit('receiveSession', gameEngine.getSession());
    });

    socket.on('connectPlayer', (player) => {
        gameEngine.connectPlayer(socket, player);
    });

});