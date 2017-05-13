(function () {
   'use strict';
}());

function Bowling() {
  this._score = 0;
  this._currentFrameScore = [];
  this._currentFrame = 1;
  this._currentBall = 1;
  this._strike = false;
  this._frameScores = {};
}

Bowling.prototype.takeTurn = function(pins) {
  if (this._strike) {
    this._calculateStrike(pins);
  } else if (this._isFirstBall()) {
    this._logFirstBall(pins);
  } else {
    this._logSecondBall(pins);
  }
}

Bowling.prototype.totalScore = function() {
  return this._score;
};

Bowling.prototype.scoreByFrame = function(frame) {
  var frameNo = "frame" + frame;
  return this._frameScores[frameNo];
};

//PRIVATE

Bowling.prototype._calculateStrike = function(pins) {
  if (this._isFirstBall()) {
    this._logFirstBall(pins);
  } else {
    this._score += ((this._currentFrameScore[0] + pins));
    this._strike = false;
    this._calculatePreviousStrike(pins);
    this._logSecondBall(pins);
  }
};

Bowling.prototype._calculatePreviousStrike = function(pins) {
  var previousFrame = (this._currentFrame - 1);
  var previousFrameScore = this.scoreByFrame(previousFrame).reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  this._updateStrikeScore(previousFrame, previousFrameScore, pins)
};

Bowling.prototype._updateStrikeScore = function(frame, frameScore, pins) {
  var currentFrame = this._currentFrameScore[0];
  currentFrame += pins;
  this._frameScores["frame" + frame] = [frameScore, currentFrame];
};

Bowling.prototype._logFirstBall = function(pins) {
  this._currentFrameScore.push(pins);
  if (pins ===  10) {
    this._strike = true;
    this._updateFrameScores(this._currentFrame);
  } else {
    this._currentBall = 2;
  }
}

Bowling.prototype._logSecondBall = function(pins) {
  this._currentFrameScore.push(pins);
  this._updateFrameScores(this._currentFrame);
}

Bowling.prototype._updateFrameScores = function(frame) {
  this._frameScores["frame" + frame] = this._currentFrameScore;
  this._updateTotalScore();
  this._endTurn();
};

Bowling.prototype._updateTotalScore = function() {
  for (var i = 0; i < this._currentFrameScore.length; i ++) {
    this._score += this._currentFrameScore[i];
  }
};

Bowling.prototype._endTurn = function() {
  this._currentFrameScore = [];
  this._currentBall = 1;
  this._currentFrame ++;
};

Bowling.prototype._isFirstBall = function() {
  return (this._currentBall === 1);
};
