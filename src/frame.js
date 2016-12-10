var Frame = function(fn){
  this.MAX_POINTS = 10;
  this.MAX_ROLLS = 2;
  this.rollCount = 0;
  this.score = 0;
  this.points = [];
  this.fn = fn
};

Frame.prototype.roll = function(){
  if (this.hasEnded()) {
    this.fn(this);
    return "Frame is over";
  } else {
    var number = this.calculateRollScore();
    console.log(number);
    this.updateRollCount();
    this.updateScore(number);
    this.updatePoints(number);
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
  var newScore = Math.floor(Math.random() * 10);
  if (newScore <= this.availablePoints()) {
    return newScore
  } else {
    this.calculateRollScore();
  }
}

Frame.prototype.hasEnded = function(){
  return (this.rollCount === this.MAX_ROLLS) || (this.score === this.MAX_POINTS)
}

Frame.prototype.availablePoints = function(){
  return 10 - this.score;
}
