function bowlingGame() { 
    this.score = 0;
    this.frame = [];
    this.players = [];
}

bowlingGame.prototype.addPlayers = function(playerName){
    this.players.push(playerName);
};

bowlingGame.prototype.addFrames = function(frame){
    console.log("Array total: " + frame.reduce(getSum));
    if (frame.reduce(getSum) > 10) {
        return 'Error: Frame has incorrect values';
    } else {
    this.frame.push(frame);
    }
};

function getSum(total, num) {
  return total + num;
}
