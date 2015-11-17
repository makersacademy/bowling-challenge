function Game () {
  this.startingPins = 10;
  this.pins = 10;
  this.rollCount = 0;
  this.frames = [];
}

Game.prototype.registerRoll = function(knockingDownPins) {
  this.pins -= knockingDownPins;
  this.rollCount += 1;
};

Game.prototype.remainingPins = function() {
  return this.pins;
};

Game.prototype.isOver = function() {
  return (this.rollCount === 2 || this.pins === 0);
};

Game.prototype.totalFrame = function() {
  return this.startingPins - this.pins;
};

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame);
};

Game.prototype.totalScore = function() {
  var runningTotal = 0;
  for (var i = 0; i < this.frames.length; i++) {
    runningTotal += this.frames[i].total();
  }
  return runningTotal;
};

Game.prototype.isStrike = function() {
  return (this.rollCount === 1 && this.pins === 0);
};

Game.prototype.isSpare = function() {
  return (this.rollCount === 2 && this.pins === 0);
};