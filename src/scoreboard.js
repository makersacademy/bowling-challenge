'use strict';

function Scoreboard() {
  this.scores = [];
  this.frames = [];
};

Scoreboard.prototype.firstRoll = function(number) {
  number <= 10 ? this.scores[0] = number : tenPinsError();
};

Scoreboard.prototype.secondRoll = function(number) {
  number <= 10-this.scores[0] ? this.scores[1] = number : tenPinsError();
};

Scoreboard.prototype.rollScore = function() {
  if (this.scores.length == 2) {
    return this.scores.reduce((a,b) => a + b);
  }
};

Scoreboard.prototype.emptyScores = function() {
  this.scores = [];
};

Scoreboard.prototype.newFrame = function() {
  var frame = this.rollScore();
  this.frames.push(frame);
};

var tenPinsError = function () {
  throw "You can't knock down more than 10 pins!";
};
