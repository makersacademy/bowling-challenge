function CheckRoll(scorecard){
  this._scorecard = scorecard;
}
CheckRoll.prototype.roll = function(roll){
  if(this._isGameOver()){throw new Error("game is over")}
  if(!this._isValidInput(roll)){throw new Error("score error")};
  if(!this._isFameWithinTen(roll)){throw new Error("frame score error")};
}

CheckRoll.prototype._isValidInput = function(roll){
  return Number.isInteger(roll) && roll <= 10;
}

CheckRoll.prototype._isFameWithinTen = function(roll){
  if(this.lastFrame().length === 1 && this.lastFrame()[0] != 10){
    return (this.lastFrame()[0] + roll) <= 10;
  }else{return true}
}

CheckRoll.prototype.lastFrame = function(){
  if (this._scorecard.length > 0){
    return this._scorecard[this._scorecard.length - 1]
  }else{
    return []
  }
}

CheckRoll.prototype._isGameOver = function() {
  if(this._scorecard.length >= 10){
    switch (this._scorecard[this._scorecard.length-1].length) {
      case 1:
        return false
        break;
      case 2:
        return arraySum(this._scorecard[this._scorecard.length-1]) >= 10 ? false : true;
        break;
      case 3:
        return true;
        break;
    }
  }
  return false
}
