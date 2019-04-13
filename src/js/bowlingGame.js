function bowlingGame() { 
    this.score = 0;
    this.frame = [];
    this.players = [];
}

bowlingGame.prototype.addPlayers = function(playerName){
    this.players.push(playerName);
};

bowlingGame.prototype.addFrames = function(frame){
    if (_isNotValidFrame(frame)){   
        return 'Error: Frame has incorrect values';
    } else if(_isLastFrame(this.frame)) {
        return 'Error: Game over';
    } else {
        this.frame.push(frame);
    }
    this.setTotal(frame);
    this.setState(frame);
};

bowlingGame.prototype.lastFrame = function(){
    // WIP
};

bowlingGame.prototype.setTotal = function(frame){
    // if (this.state === 'strike'){
    //     this.score = this.score + frame.reduce(getSum);
    // }else if (this.state === 'spare'){
    //     this.score = this.score + frame[0];
    // }
    // this.score = this.score + frame.reduce(getSum);
    
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

function _isLastFrame(frame){
    if (frame.length >= 10){ return true; }
}

function _isEqualToTen(frame){
    return (frame.reduce(getSum) === 10) ? true : false;
}

function _checkSpareOrStrike(values) {
    return values.length === 2 ? 'spare' : 'strike';
}
