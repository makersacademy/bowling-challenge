function Game() {
  this.rolls = [],    
  this.frameNum = 1,
  this.rollNum = 1
}

Game.prototype.roll = function(score) {
  this.rolls.push(score);
}

Game.prototype.score = function() {
  return this.rolls.reduce((a, b) => a + b);
}

Game.prototype.isStrike = function(score) {
  return score === 10;
}

Game.prototype.startNextFrame = function() {
  this.rollNum = 1;
  this.frameNum++;
}

Game.prototype.setupNext = function() {
  if (this.rollNum === 1) {
    this.incrementRoll();
  } else {
    this.incrementRoll();
    this.incrementFrame();
  };
}

Game.prototype.incrementFrame = function() {
  this.frameNum++;
}

Game.prototype.incrementRoll = function() {
  this.rollNum === 1 ? this.rollNum++ : this.rollNum--;
}

