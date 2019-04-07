function bowlingGame() { 
    this.score = 0;
    this.frame = 0;
    this.players = [];
}

bowlingGame.prototype.addPlayers = function(playerName){
    this.players.push(playerName);
};