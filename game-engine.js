let gameEngine = {};
const duration = 3600 * 24;
let sessionObj = {};
let socketRef = null;
let socketServerRef = null;
let gameLoopInterval = null;

gameEngine.init = (server) => {
    socketServerRef = server;
}

gameEngine.startSession = (socket) => {
    console.log("Start session.");
    sessionObj.id = socket.id;
    sessionObj.start = new Date();
    sessionObj.end = new Date() + duration; 
    gameLoopInterval = setInterval(function() {
        gameEngine.gameLoop();
    }, 1000);
}

gameEngine.getSession = () => {
    return sessionObj;
}

gameEngine.stopSession = () => {
    gameLoopInterval.clearInterval();
    sessionObj = {};
}


gameEngine.gameLoop = () => {
    console.log('Game is running..');
}

gameEngine.connectPlayer = (socket, player) => {
    if(!sessionObj.id)
        gameEngine.startSession(socket);

    if(!sessionObj.mapData)
        sessionObj.mapData = {};
    
    if(sessionObj.mapData[player.country]) 
        sessionObj.mapData[player.country]++;
    else
        sessionObj.mapData[player.country] = 1;
    
    socketRef = socket;
    socketRef.broadcast.emit('playerConnected', player);
    socketServerRef.sockets.emit('receiveMapData', sessionObj.mapData);
}

gameEngine.disconnectPlayer = () => {
    
}

module.exports = gameEngine;