function Bowling() {
  this.total = 0;
  this.frames = [];
};

Bowling.prototype.bowl = function (roll) {
  var previousFrame = this.frames.slice(-1)[0];
  var frameTotal = roll.reduce(function(a, b) { return a + b; }, 0);
  if (this.frames.length === 9) {
    var previousTotal = previousFrame.reduce(function(a, b) { return a + b; }, 0);
    var frameSliceTotal = roll.slice(0,2).reduce(function(a, b) { return a + b; }, 0);
    if (previousTotal == 10) {
      if (previousFrame[0] == 10) {
        this.total += frameSliceTotal;
      } else {
        this.total += roll[0];
      }
    }
  } else if (previousFrame) {
    var previousTotal = previousFrame.reduce(function(a, b) { return a + b; }, 0);
    if (previousTotal == 10) {
      if (previousFrame[0] == 10) {
        this.total += frameTotal;
      } else {
        this.total += roll[0];
      }
    }
  }
  if (this.frames.length >= 2) {
    var previousPreviousFrame = this.frames.slice(-2)[0];
    if (previousPreviousFrame[0] === 10 && previousFrame[1] == 0) {
      this.total += roll[0];
    }
  }
  this.frames.push(roll);
  this.total += frameTotal;
};
