function Bowling() {
  this.total = 0;
  this.frames = [];
};

var previousFrame;
var previousPreviousFrame;
var frameTotal;
var previousTotal;

Bowling.prototype.bowl = function(roll) {
  previousFrame = this.frames.slice(-1)[0];
  frameTotal = roll.reduce(function(a, b) {return a + b;}, 0);
  if (this.frames.length === 9) {
    frameSliceTotal = roll.slice(0,2).reduce(function(a, b) { return a + b; }, 0);
    this._calculate(roll, frameSliceTotal);
  } else if (previousFrame) {
    this._calculate(roll, frameTotal);
  }
  if (this.frames.length >= 2) {
    this._checkTwoFramesBack(roll);
  }
  this.frames.push(roll);
  this.total += frameTotal;
};

Bowling.prototype._checkTwoFramesBack = function(roll) {
  previousPreviousFrame = this.frames.slice(-2)[0];
  if (previousPreviousFrame[0] === 10 && previousFrame[1] == 0) {
    this.total += roll[0];
  }
}

Bowling.prototype._calculate = function(roll, frameTotal) {
  previousTotal = previousFrame.reduce(function(a, b) { return a + b; }, 0);
  if (previousTotal == 10) {
    previousFrame[0] == 10 ? this.total += frameTotal : this.total += roll[0];
  }
}
