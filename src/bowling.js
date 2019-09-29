function Bowling() {
  this.frames = [];
  this.currentFrame = 0;
  this.maxRolls = 2;
  this.currentScore = 0;
  this.totalScore = 0;
};

Bowling.prototype.startNewFrame = function() {
  this.currentFrame += 1;
  this.frames[this.currentFrame - 1] = [];
};

Bowling.prototype.addScore = function(number) {
  if (this.frames[this.currentFrame - 1].length >= this.maxRolls) {
    throw new Error('START A NEW FRAME');
  }
  this.frames[this.currentFrame-1].push(number);
};

Bowling.prototype.finishFrame = function() {
  var frameTotal = this.frames[this.currentFrame - 1];
  this.currentScore += frameTotal[0] + frameTotal[1];
};

Bowling.prototype.calculateGutter = function() {
  this.totalScore = 0;
};

Bowling.prototype.calculateSpare = function(number) {
  this.frames[this.currentFrame-1].push(number * 2);
};
