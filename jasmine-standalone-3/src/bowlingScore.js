'use strict';

function Scorer() {
  this.pins = [[]]
  this._scoreFrame = 0
};

Scorer.prototype.showPins = function(number) {
  return number;
};

Scorer.prototype.insert = function(number) {
  if (this.pins[this._scoreFrame].length < 2) {
    this.pins[this._scoreFrame].push(number);
  }
  else {
    this.pins.push([number]);
    this._scoreFrame += 1;
  };
};

Scorer.prototype.currentFrameScore = function() {
  return this._thisScoreFrameCalculator();
};

Scorer.prototype._thisScoreFrameCalculator = function() {
  var sum = this.pins.reduce(function(accumulator, order){
    return order.reduce(function(sum, order){
      return sum + order;
    }, 0);
  }, 0);
  return sum;
};

Scorer.prototype._isSpare = function() {
  return this._thisScoreFrameCalculator() === 10;
};