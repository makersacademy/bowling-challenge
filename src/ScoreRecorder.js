function ScoreRecorder(scorecard){
  this._scorecard = scorecard;
}
ScoreRecorder.prototype.roll = function(score){
  if(this._isGameOver()){throw new Error("Game is over")}
  if(!this._isValidRoll(score)){throw new Error("invalid character")};
  if(score === "/" && !this._isValidSpare()){throw new Error("invalid spare")};
  if(this._scorecard.length === 0){
    this._scorecard.push([score]);
    return this._scorecard
  }else if(this.lastFrame().length === 2){
    if (this._scorecard.length == 10){
      this.lastFrame().push(score);
    } else {
    this._scorecard.push([score])
  }
    return this._scorecard
  }else if(this.lastFrame().length === 1){
    this._scorecard[this._scorecard.length-1].push(score);
    return this._scorecard;
  };
}

ScoreRecorder.prototype._isValidRoll = function(roll){
  var isNum = /^\d+$/.test(roll);
  var isOneChar = roll.length === 1;
  var isStrikeOrSpare = (roll === "/") || (roll === "X");
  return (isNum || isStrikeOrSpare) && isOneChar;
}

ScoreRecorder.prototype._isValidSpare = function(){
  return this._scorecard.length > 0 ? (this.lastFrame().length > 0) : false
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
