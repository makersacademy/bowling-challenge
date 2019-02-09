function CheckRoll(scorecard) {
  this._scorecard = scorecard;
}

CheckRoll.prototype.run = function(roll){
  if(!this._isValidRoll(roll)){throw new Error("invalid character")}
  console.log("here");
  console.log(roll)
  switch(roll){
    case "/": if(!this._isValidSpare()){throw new Error("illegal spare")};
    break;
    case "X": if(!this._isValidStrike()){throw new Error("illegal strike")};
    break;
    default: return 0;
    break;
  };
  return 0
}

CheckRoll.prototype._isValidRoll = function(roll){
  var isNum = /^\d+$/.test(roll);
  var isOneChar = roll.length === 1;
  var isStrikeOrSpare = (roll === "/") || (roll === "X");
  return (isNum || isStrikeOrSpare) && isOneChar;
}

CheckRoll.prototype._isValidSpare = function(){
  return this._scorecard.length > 0 ? (this.lastFrame().length != 2) : false
}

CheckRoll.prototype._isValidStrike = function(){
  return this._scorecard.length > 0 ? (this.lastFrame().length > 1) : true
}

CheckRoll.prototype.lastFrame = function(){
  return this._scorecard[this._scorecard.length-1]
}
