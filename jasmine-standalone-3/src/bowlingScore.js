'use strict';

function Scorer() {
  this.pins = [[]]
  this.scores = []
  this.currentFrame = 0
  this._currentAccumulatingFrame = 0
};

Scorer.prototype.showPins = function(number) {
  return number;
};

Scorer.prototype.insert = function(number) {
  if (this.pins[this.currentFrame].length < 2 && this.currentFrameScore() < 10) {
    this.pins[this.currentFrame].push(number);
  }
  else {
    this.pins.push([number]);
    this.scores.push(this.currentFrameScore());
    this.currentFrame++
  };
};

Scorer.prototype.currentScore = function() {
  this._accumulation();
  return this.scores.reduce(function(sum, value) {
    return sum + value;
  }, 0);
}

Scorer.prototype._accumulation = function() {
  if (this._isSpare()) {
    this.scores.push(this._currentAccumulatingFrameScore());
  }
  else {
    this.scores.push(this.currentFrameScore());
  }
};

Scorer.prototype.currentFrameScore = function () {
  return this.pins[this.currentFrame].reduce(function(sum, value) {
    return sum + value;
  }, 0);
}

Scorer.prototype._currentAccumulatingFrameScore = function() {
  return this.pins[this._currentAccumulatingFrame].reduce(function(sum, value) {
    return sum + value;
  }, 0);
};

Scorer.prototype._isSpare = function() {
  return this._currentAccumulatingFrameScore() === 10;
};