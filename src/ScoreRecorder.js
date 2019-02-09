function ScoreRecorder(scorecard){
  this._scorecard = scorecard;
}
ScoreRecorder.prototype.roll = function(score){
  if(!this._isValidRoll(score)){throw new Error("invalid character")};
  if(score === "/" && !this._isValidSpare()){throw new Error("invalid spare")};
  if(!(this._scorecard.length == 9 && this.lastFrame().length == 2)&&this._scorecard.length < 10){
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
  }else if(this._scorecard.length === 9 && this.lastFrame().length == 2){
    console.log("in the last frame")
    console.log(this._scorecard.length)
    this._scorecard.forEach(function(obj){
      console.log(obj);
    });
    console.log(this._scorecard)
    console.log("that was supposed to be round 10")
    //last frame
    this._scorecard.push([score]);
    console.log(this.lastFrame())
  }else if(this._scorecard.length >= 10){
    if(this._isGameOver()){throw new Error("Game is over")}
    this._scorecard[this._scorecard.length - 1].push(score);
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
