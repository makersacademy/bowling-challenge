(function () {
   'use strict';
}());

function Bowling() {
  this._score = 0;
  this._currentFrameScore = [];
  this._currentFrame = 1;
  this._currentBall = 1;
  this._strike = false;
  this.scoreByFrame = {};
}

Bowling.prototype.takeTurn = function(pins) {
  if (this._strike) {
    this._calculateStrike(pins);
  } else if (pins === 10) {
    this._strike = true;
    this._endTurn();
  } else if (this._isFirstBall()) {
    this._logFirstBall(pins);
  } else {
    this._logSecondBall(pins);
  }
}

Bowling.prototype.totalScore = function() {
  return this._score;
};

//PRIVATE

Bowling.prototype._calculateStrike = function(pins) {
  if (this._isFirstBall()) {
    this._logFirstBall(pins);
  } else {
    this._score += ((this._currentFrameScore[0] + pins) + 10);
    this._strike = false;
    this._logSecondBall(pins);
    this._endTurn();
  }
};

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
  this._currentFrame ++;
};

Bowling.prototype._isFirstBall = function() {
  return (this._currentBall === 1);
};
