var Frame = function(){
  this.MAX_POINTS = 10;
  this.MAX_ROLLS = 2;
  this.rollCount = 0;
  this.score = 0;
};

Frame.prototype.roll = function(){
  if (this.hasEnded()) {
    throw "Frame is over"
  } else {
    this.updateRollCount();
    this.updateScore();
  }
}

Frame.prototype.updateRollCount = function(){
  this.rollCount += 1;
}

Frame.prototype.updateScore = function(){
  this.score += this.calculateRollScore();
}

Frame.prototype.calculateRollScore = function(){
  return Math.floor(Math.random() * 10);
}

Frame.prototype.hasEnded = function(){
  return (this.rollCount === this.MAX_ROLLS) || (this.score === this.MAX_POINTS)
}
