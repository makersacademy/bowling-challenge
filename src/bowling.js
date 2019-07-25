'use strict';

var Bowling = function() {
  this._scoreboard = [];
  this._firstball = true
};

Bowling.prototype.totalScore = function() {
  return this._scoreboard.map(function(x) {
    return x.thisFrame().score
  }).reduce(function(total, num) {
    return total + num
  });
};

Bowling.prototype.newBall = function(score) {
  if (this.isFirstBall()) {
    return new Ball1(score, this)
  } else {
    return new Ball2(score, this)
  };
};

Bowling.prototype.enterBallScore = function(score) {
  this.newBall(score).pushBallToFrame()
};

Bowling.prototype.FirstBall = function(boolean) {
  this._firstball = boolean
};

Bowling.prototype.pushFrameToScoreboard = function(frame) {
  this._scoreboard.push(frame)
};

Bowling.prototype.isFirstBall = function() {
  return this._firstball
};

Bowling.prototype.thisFrame = function() {
  return this._scoreboard[this.gameLength() - 1];
};

Bowling.prototype.previousFrame = function() {
  return this._scoreboard[this.gameLength() - 2];
};

Bowling.prototype.previousPreviousFrame = function() {
  return this._scoreboard[this.gameLength() - 3];
};

Bowling.prototype.gameLength = function() {
  return this._scoreboard.length;
};

Bowling.prototype.finalFrame = function() {
  return this.gameLength() === 10
}