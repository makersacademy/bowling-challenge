'use strict';

function Bowling() {
  this.score = [];
};

Bowling.prototype.total = function() {
  return this.score.reduce((a,b) => a + b, 0);
};


Bowling.prototype.roll = function(pins) {
  this.score.push(pins)
};
