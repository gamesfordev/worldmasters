const  app = require('./app');
// const io = require('socket.io');
var http = require('http');
var server = http.Server(app);
const httpPort = process.env.PORT  ||5000;

// const socketPort = process.env.PORT|| 5001;
// const socketServer = io.listen(socketPort);
const gameEngine = require('./game-engine');

server.listen(httpPort, function(){
  console.log(`INFO: Listening to ${httpPort}`);
});

var io = require('socket.io')(server);

io.on('connection', (socket) => {

    gameEngine.init(io);

    socket.on('getSession', () => {
        socket.emit('receiveSession', gameEngine.getSession());
    });

    socket.on('connectPlayer', (player) => {
        gameEngine.connectPlayer(socket, player);
    });

});