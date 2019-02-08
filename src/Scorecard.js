function Scorecard(){
  this._scorecard = new Array();
  console.log(this);
}

Scorecard.prototype._isValidRoll = function(roll){
  var isNum = /^\d+$/.test(roll);
  var isOneChar = roll.length === 1;
  var isStrikeOrSpare = (roll === "/") || (roll === "X");
  return (isNum || isStrikeOrSpare) && isOneChar;
}



Scorecard.prototype.lastFrame = function(){
  return this._scorecard[this._scorecard.length-1]
}

Scorecard.prototype._isGameOver = function(){
  if((this._scorecard.length === 10) && (this.lastFrame().length >= 2)){
    return true
  }else{
    return false
  };
}

Scorecard.prototype.record = function(score){
  console.log(this._isGameOver());
  if(this._isGameOver()){throw new Error("Game is over")}
  if(!this._isValidRoll(score)){throw new Error("invalid character")};
  if(this._scorecard.length === 0){
    this._scorecard.push([score]);
    return this._scorecard
  }else if(this.lastFrame().length === 2){
    this._scorecard.push([score])
    return this._scorecard
  }else if(this.lastFrame().length === 1){
    this._scorecard[this._scorecard.length-1].push(score);
    return this._scorecard;
  };
}

Scorecard.prototype.see = function(){
  return this._scorecard
}

Scorecard.prototype.score = function(){
  score_array = []
  this._scorecard.forEach(function(frame,i){
    var firstRoll = parseInt(frame[0]);
    var secondRoll = parseInt(frame[1]);
    var lastTotal = i === 0 ? 0 :  score_array[i-1]
    score_array.push(firstRoll+secondRoll+lastTotal);
  })
  return score_array;
}
