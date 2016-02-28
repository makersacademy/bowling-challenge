function Score(){
  this.rolls = [];
};

Score.prototype.notify = function(type){
  return "Congratulations! You scored a " + type +"!";
}

Score.prototype.score = function(currentFrame){
  var result = 0;
  var rollIndex = 0;

  for (var frameIndex = 1; frameIndex <= currentFrame; frameIndex++){
    if (this._isStrike(rollIndex)) {
      this.notify("strike");
      if (!isNaN(this._getStrikeScore(rollIndex))) {
        result += this._getStrikeScore(rollIndex);
        rollIndex++;
      }
      else {
        return result };
    }
    else if (this._isSpare(rollIndex)) {
      this.notify("spare");
      if (!isNaN(this._getSpareScore(rollIndex))){
        result += this._getSpareScore(rollIndex);
        rollIndex += 2;
      }
      else {
        return result;
      }
    }
    else {
      if (!isNaN(this._getNormalScore(rollIndex))){
        result += this._getNormalScore(rollIndex);
        rollIndex += 2;
      } else {
        return result;
      }
    }
  }
  return result;
}

Score.prototype._isStrike = function(rollIndex){
  return this.rolls[rollIndex] == 10
}

Score.prototype._isSpare = function(rollIndex){
  return this.rolls[rollIndex] + this.rolls[rollIndex + 1] == 10;
}

Score.prototype._getStrikeScore = function(rollIndex){
  return  this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
}

Score.prototype._getSpareScore = function(rollIndex){
  return this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
}

Score.prototype._getNormalScore = function(rollIndex){
  return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
}


