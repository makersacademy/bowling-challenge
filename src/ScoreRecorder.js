function ScoreRecorder(scorecard){
  this._scorecard = scorecard;
}
ScoreRecorder.prototype.roll = function(score){
  if(this._scorecard.length >= 10){
    if(this._isGameOver()){throw new Error("Game is over")}
    this._scorecard[this._scorecard.length - 1].push(score);
  }else if(this._scorecard.length === 9 && this.lastFrame().length == 2){
    this._scorecard.push([score]);
  }
  else if(!(this._scorecard.length == 9 && this.lastFrame().length == 2)&&this._scorecard.length < 10){
    console.log(this._scorecard)
    new CheckRoll(this._scorecard).run(score)
    switch(true){
      case this._scorecard.length === 0:
        score === "X" ? this._scorecard.push([score, null]) : this._scorecard.push([score]);
        return this._scorecard
      case this.lastFrame().length === 2:
        score === "X" ? this._scorecard.push([score, null]) : this._scorecard.push([score]);
        return this._scorecard
      case this.lastFrame().length === 1:
        this._scorecard[this._scorecard.length-1].push(score);
        return this._scorecard;
    }
  };
};

ScoreRecorder.prototype._isValidRoll = function(roll){
  var isNum = /^\d+$/.test(roll);
  var isOneChar = roll.length === 1;
  var isStrikeOrSpare = (roll === "/") || (roll === "X");
  return (isNum || isStrikeOrSpare) && isOneChar;
}

ScoreRecorder.prototype._isValidSpare = function(){
  return this._scorecard.length > 0 ? (this.lastFrame().length != 2) : false
}

ScoreRecorder.prototype._isValidStrike = function(){
  return this._scorecard.length > 0 ? (this.lastFrame().length > 1) : true
}


ScoreRecorder.prototype.lastFrame = function(){
  return this._scorecard[this._scorecard.length-1]
}


ScoreRecorder.prototype._isGameOver = function(){
  if((this._scorecard.length === 10) && (this.lastFrame().length >= 2)){
    return this._isLastFrameFinished()
  }else{
    return false
  };
}
ScoreRecorder.prototype._isLastFrameFinished = function(){
  if(this.lastFrame().length >= 3){
    return true
  }else if(this.lastFrame().includes("/")||this.lastFrame().includes("X")){
    return false
  } else {
  return true
  };
}
