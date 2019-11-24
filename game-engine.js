let gameEngine = {};
const duration = 30000;
let sessionObj = {};
let socketRef = null;
let socketServerRef = null;
let gameLoopInterval = null;

gameEngine.init = (server) => {
    socketServerRef = server;
}

gameEngine.startSession = (socket) => {
    console.log("INFO: Starting game session.");
    sessionObj.id = socket.id;
    sessionObj.start = new Date();
    sessionObj.end = new Date(new Date().getTime() + duration); 
    gameLoopInterval = setInterval(function() {
        gameEngine.gameLoop();
    }, 1000);
}

gameEngine.getSession = () => {
    return sessionObj;
}

gameEngine.stopSession = () => {
    let scores = Object.keys(sessionObj.mapData).map(function(key) {
        return {country: key, score: sessionObj.mapData[key]};
    }).sort((a, b) => (b.score - a.score));
    socketServerRef.sockets.emit('sessionEnded', scores); // session is over. notify all clients 
    clearInterval(gameLoopInterval);
    sessionObj = {};
    console.log('INFO: Session ended..');
}


gameEngine.gameLoop = () => {
    console.log('INFO: Session is active..');
    socketServerRef.sockets.emit('timerTick', {
        diff: (sessionObj.end.getTime() - new Date().getTime()) / 1000,
        end: sessionObj.end.getTime()
    });
    if(sessionObj.end.getTime() <= new Date().getTime()) {
        gameEngine.stopSession();
    }
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
    socketServerRef.sockets.emit('receiveMapData', sessionObj.mapData); // broadcast map data to  all 
    console.log('INFO: Player connected. ', player, sessionObj.mapData);
}

gameEngine.disconnectPlayer = () => {
    
}

module.exports = gameEngine;