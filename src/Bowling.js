'use strict';

function Bowling() {
  this.frame = []
};

Bowling.prototype.getFrame = function () {
  return this.frame;
};

Bowling.prototype.roll = function (pins) {
  this.frame.push(pins);
};

Bowling.prototype.score = function () {
  var result = 0
  for (var i = 0; i < 20; i++) {
    result += this.frame[i]
  }
  return result;
};
