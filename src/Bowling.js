function Bowling() {
  this._total = 0;
  this._frames = [];
};

var previousFrame;
var previousPreviousFrame;
var frameTotal;
var previousTotal;

Bowling.prototype.total = function () {
  return this._total;
};

Bowling.prototype.frames = function () {
  return this._frames;
};

Bowling.prototype.reset = function() {
  this._total = 0;
  this._frames = [];
}

Bowling.prototype.bowl = function(roll) {
  previousFrame = this._frames.slice(-1)[0];
  frameTotal = roll.reduce(function(a, b) {return a + b;}, 0);
  if (this._frames.length === 9) {
    frameSliceTotal = roll.slice(0,2).reduce(function(a, b) { return a + b; }, 0);
    this._calculate(roll, frameSliceTotal);
  } else if (previousFrame) {
    this._calculate(roll, frameTotal);
  }
  if (this._frames.length >= 2) {
    this._checkTwoFramesBack(roll);
  }
  this._frames.push(roll);
  this._total += frameTotal;
};

Bowling.prototype._checkTwoFramesBack = function(roll) {
  previousPreviousFrame = this._frames.slice(-2)[0];
  if (previousPreviousFrame[0] === 10 && previousFrame[1] == 0) {
    this._total += roll[0];
  }
}

Bowling.prototype._calculate = function(roll, frameTotal) {
  previousTotal = previousFrame.reduce(function(a, b) { return a + b; }, 0);
  if (previousTotal == 10) {
    previousFrame[0] == 10 ? this._total += frameTotal : this._total += roll[0];
  }
}
