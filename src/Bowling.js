'use strict';

function Bowling () {
  this.frame = [];
};

Bowling.prototype.roll = function (pins) {
  this.frame.push(pins);
};

Bowling.prototype.score = function () {
  var result = 0;
  var rollIndex = 0;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (this.frame[rollIndex] + this.frame[rollIndex + 1] === 10) {
      result += this.frame[rollIndex] + this.frame[rollIndex + 1] + this.frame[rollIndex + 2];
    } else {
      result += this.frame[rollIndex] + this.frame[rollIndex + 1];
    }
    rollIndex += 2;
  }
  return result;
};
