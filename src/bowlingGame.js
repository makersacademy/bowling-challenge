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
    console.log("Checkpoint 1 " + frame);
    this.setState(frame);
};

bowlingGame.prototype.setState = function(values){
    console.log("Checkpoint 2 " + values);
    if (_isEqualToTen(values)){
        console.log("Checkpoint 3 " + values);
        this.state = _checkSpareOrStrike(values);
    } else {
        console.log("Checkpoint 4 " + values);
        this.state = 'normal';
    }
};

function getSum(total, num) {
  return total + num;
}

function _isNotValidFrame(frame){
    console.log("Checkpoint 6 " + frame);
    if (frame.reduce(getSum) > 10) { return true; }
}

function _isEqualToTen(frame){
    console.log("Checkpoint 7 " + frame);
    return (frame.reduce(getSum) === 10) ? true : false;
}

function _checkSpareOrStrike(values) {
    console.log("Checkpoint 5 " + values);
    return values.length === 2 ? 'spare' : 'strike';
}