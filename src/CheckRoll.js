function CheckRoll(scorecard){
  this._scorecard = scorecard;
}
CheckRoll.prototype.roll = function(roll){
  if(!this._isValidInput(roll)){throw new Error("score error")}
}

CheckRoll.prototype._isValidInput = function(roll){
  return Number.isInteger(roll) && roll <= 10;
}
