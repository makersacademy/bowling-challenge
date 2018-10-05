'use strict';

function Bowling() {
  this.score = 0;
  this.frame = [];
}

Bowling.prototype.play = function(pins) {
  this.frame.push(pins);
  return pins;
  return this.frame;
  console.log(this.frame);
};
