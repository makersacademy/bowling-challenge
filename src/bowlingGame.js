function bowlingGame() { 
    this.score = 0;
    this.frame = [];
    this.players = [];
    this.state = '';
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
    this.setState(frame);
};

bowlingGame.prototype.setState = function(values){
    if (_isEqualToTen(values)){
        this.state = _checkSpareOrStrike(values);
    } else {
        this.state = 'normal';
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

function _checkSpareOrStrike(values) {
    return values.length === 2 ? 'spare' : 'strike';
}