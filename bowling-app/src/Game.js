function Game() {
  this.gFrames = [],
  this.rolls = [],    
  this.frameNum = 1,
  this.rollNum = 1
}

Game.prototype.roll = function(score) {
  this.rolls.push(score);
  this.gFrames.push(new Frame());
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
  if (this.rollNum === 2) this.incrementFrame();
  this.incrementRoll();
}

Game.prototype.incrementFrame = function() {
  this.frameNum++;
}

Game.prototype.incrementRoll = function() {
  this.rollNum === 1 ? this.rollNum++ : this.rollNum--;
}

Game.prototype.setupGame = function() {
  for(var i = 0; i < 10; i++) {
    this.gFrames.push(new Frame());
  };
}
