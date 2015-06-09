function Frame() {
  this.goCount = 0;
  this.startingPins = 10;
  this.standingPins = 10;
  this.rolls = [];
  this.score = 0;
}

Frame.prototype.registerGo = function(rollScore) {
  if(!this.isOver()){  
    this.goCount += 1;
  this.standingPins -= rollScore;
  this.score += rollScore;
  this.rolls.push(rollScore)
  }
  else {
    throw ("Frame is over");
  }
};

Frame.prototype.remainingPins = function() {
  return this.standingPins;
};

Frame.prototype.isOver = function() {
  return (this.goCount === 2 || this.standingPins === 0);
};

Frame.prototype.total = function() {
  return this.score;
};

Frame.prototype.isStrike = function() {
  if(this.goCount === 1 && this.standingPins === 0) {
    return true;
  };
};

Frame.prototype.isSpare = function() {
  if(this.goCount === 2 && this.standingPins === 0){
    return true;
  };
};
