const  app = require('./app');

const socketPort = 5001;
const httpPort = process.env.PORT || 5000;
// const socketServer = io.listen(socketPort);
const gameEngine = require('./game-engine');

app.listen(httpPort, function(){
  console.log(`INFO: Listening to ${httpPort}`);
});
const io = require('socket.io')(app);
io.on('connection', (socket) => {

    gameEngine.init(socketServer);

    socket.on('getSession', () => {
        socket.emit('receiveSession', gameEngine.getSession());
    });

    socket.on('connectPlayer', (player) => {
        gameEngine.connectPlayer(socket, player);
    });

});