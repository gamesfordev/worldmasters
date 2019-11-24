const  app = require('./app');
const server = require('http').createServer(app); 
const io = require('socket.io')(server);
const port = process.env.PORT || 8080;
const gameEngine = require('./game-engine');

server.listen(port, function(){
  console.log(`INFO: Listening to ${port}`);
});

io.on('connection', (socket) => {

    gameEngine.init(io);

    socket.on('getSession', () => {
        socket.emit('receiveSession', gameEngine.getSession());
    });

    socket.on('connectPlayer', (player) => {
        gameEngine.connectPlayer(socket, player);
    });

});