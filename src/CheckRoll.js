function CheckRoll(scorecard) {
  this._scorecard = scorecard;
}

CheckRoll.prototype.lastFrame = function(){
  return this._scorecard[this._scorecard.length-1]
}


CheckRoll.prototype.run = function(roll){
  if(!this._isValidRoll(roll)){throw new Error("invalid character")}
  switch(roll){
    case "/": if(!this._isValidSpare()){throw new Error("illegal spare")};
    break;
    case "X": if(!this._isValidStrike()){throw new Error("illegal strike")};
    break;
    default: if(!this._isFrameUnder10(roll)){throw new Error("illegal score")};
  };
  return 0
}

CheckRoll.prototype._isValidRoll = function(roll){
  var isNum = /^\d+$/.test(roll);
  var isOneChar = roll.length === 1;
  var isStrikeOrSpare = (roll === "/") || (roll === "X");
  return (isNum || isStrikeOrSpare) && isOneChar;
}

CheckRoll.prototype._isFrameUnder10 = function(roll){
  if(this._scorecard.length > 0 && this.lastFrame().length === 1){
    var lastRoll = parseInt(this.lastFrame()[0]);
    var thisRoll = parseInt(roll);
    if(lastRoll+thisRoll>9){return false}
  }
  return true
}

CheckRoll.prototype._isValidSpare = function(){
  return this._scorecard.length > 0 ? (this.lastFrame().length != 2) : false
}

CheckRoll.prototype._isValidStrike = function(){
  return this._scorecard.length > 0 ? (this.lastFrame().length > 1) : true
}
