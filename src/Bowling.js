(function () {
   'use strict';
}());

function Bowling() {
  this._score = 0;
  this._currentFrameScore = [];
  this._currentFrame = 1;
  this._currentBall = 1;
  this.scoreByFrame = {};
}

Bowling.prototype.takeTurn = function(pins) {
  if (this._isFirstBall()) {
    this._logFirstBall(pins);
  } else {
    this._logSecondBall(pins);
  }
}

Bowling.prototype.totalScore = function() {
  return this._score;
};

//PRIVATE

Bowling.prototype._logFirstBall = function(pins) {
  this._currentFrameScore.push(pins);
  this._currentBall = 2;
}

Bowling.prototype._logSecondBall = function(pins) {
  this._currentFrameScore.push(pins);
  this._updateFrameScores();
  this._endTurn();
}

Bowling.prototype._updateFrameScores = function() {
  this.scoreByFrame["frame" + this._currentFrame] = this._currentFrameScore;
  this._updateTotalScore();
};

Bowling.prototype._updateTotalScore = function() {
  for (var i = 0; i < this._currentFrameScore.length; i ++) {
    this._score += this._currentFrameScore[i];
  }
};

Bowling.prototype._endTurn = function() {
  this._currentFrameScore = [];
  this._currentBall = 1;
};

Bowling.prototype._isFirstBall = function() {
  return (this._currentBall === 1);
};
