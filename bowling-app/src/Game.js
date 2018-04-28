function Game() {
  this.gFrames = [],
  this.rolls = [],    
  this.frameNum = 1,
  this.rollNum = 1
}

Game.prototype.play = function(score) {
  if (this.rollNum === 1) this.makeFirstRoll(score);
  if (this.rollNum === 2) this.makeSecondRoll(score);
}

Game.prototype.makeFirstRoll = function(score) {
  this.roll(score);
  if (this.isStrike(score)) {
    this.startNextFrame();
  } else {
    this.incrementRoll();
  };
}

Game.prototype.makeSecondRoll = function(score) {
  this.roll(score);
  this.incrementRoll();
  this.incrementFrame();
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
  this.incrementFrame();
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
