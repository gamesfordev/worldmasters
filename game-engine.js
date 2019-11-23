let gameEngine = {};
const duration = 3600 * 24;
let sessionObj = {};
let gameLoopInterval = null;


gameEngine.startSession = (socket) => {
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

    if(sessionObj.mapData) {
        if(sessionObj.mapData[player.country]) 
            sessionObj.mapData[player.country]++;
        else
            sessionObj.mapData[player.country] = 0;
    }
    else {
        sessionObj.mapData = {};
    }
}

gameEngine.disconnectPlayer = () => {
    
}

module.exports = gameEngine;