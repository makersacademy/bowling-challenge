function CheckRoll(scorecard) {
  this._scorecard = scorecard;
}

CheckRoll.prototype.run = function(roll){
  if(!this._isValidRoll(roll)){throw new Error("invalid character")}
  return 0
}

CheckRoll.prototype._isValidRoll = function(roll){
  var isNum = /^\d+$/.test(roll);
  var isOneChar = roll.length === 1;
  var isStrikeOrSpare = (roll === "/") || (roll === "X");
  return (isNum || isStrikeOrSpare) && isOneChar;
}
