const strikePins = 10;
const gutterPins = 0;
const newFrameError = 'START A NEW FRAME';

function Bowling() {
  this.frames = [];
  this.currentFrame = 0;
  this.maxRolls = 2;
  this.currentScore = 0;
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
  this.currentScore = 0;
};

Bowling.prototype.calculateSpare = function(number) {
  this.frames[this.currentFrame-1].push(number * 2);
};

Bowling.prototype.strike = function() {
  this.frames[this.currentFrame-1].push(strikePins)
  this.frames[this.currentFrame-1].push(gutterPins)
};

Bowling.prototype.calculateStrike = function() {
  var frameTotal = this.frames[this.currentFrame - 1];
  var updateStrikeScore = (frameTotal[0])*2 + (frameTotal[1])*2;
   this.currentScore += updateStrikeScore
};
