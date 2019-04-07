function bowlingGame() { 
    this.score = 0;
    this.frame = [];
    this.players = [];
    this.state = "";
}

bowlingGame.prototype.addPlayers = function(playerName){
    this.players.push(playerName);
};

bowlingGame.prototype.addFrames = function(frame){
    if (_isNotValidFrame(frame)){   
        return 'Error: Frame has incorrect values';
    } else {
    this.frame.push(frame);
    }
};

function getSum(total, num) {
  return total + num;
}

function _isNotValidFrame(frame){
    if (frame.reduce(getSum) > 10) { return true; }
}

function _isEqualToTen(frame){
     return (frame.reduce(getSum) === 10) ? true : false;
}
