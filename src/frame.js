var Frame = function(finishFrame){
  this.MAX_POINTS = 10;
  this.MAX_ROLLS = 2;
  this.rollCount = 0;
  this.score = 0;
  this.points = [];
  this.finishFrame = finishFrame
};

Frame.prototype.roll = function(){
  var number = this.calculateRollScore();
  this.updateRollCount();
  this.updateScore(number);
  this.updatePoints(number);

  if (this.hasEnded()) {
    this.finishFrame(this);
    return "Frame is over";
  }
}

Frame.prototype.updateRollCount = function(){
  this.rollCount += 1;
}

Frame.prototype.updateScore = function(number){
  this.score += number;
}

Frame.prototype.updatePoints = function(number){
  this.points.push(number);
}

Frame.prototype.calculateRollScore = function(){
  var newScore = Math.round(Math.random() * 10);
  if (newScore <= this.availablePoints()) {
    return newScore
  } else {
    return this.calculateRollScore();
  }
}

Frame.prototype.hasEnded = function(){
  return (this.rollCount === this.MAX_ROLLS) || (this.score === this.MAX_POINTS)
}

Frame.prototype.availablePoints = function(){
  return this.MAX_POINTS - this.score;
}

Frame.prototype.isStrike = function(){
  return this.points[0] === this.MAX_POINTS || this.points[1] === this.MAX_POINTS;
}

Frame.prototype.isSpare = function(){
  return this.points.length === this.MAX_ROLLS && this.score === this.MAX_POINTS;
}
