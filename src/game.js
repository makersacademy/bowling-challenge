'use strict';

function Game(frame = Frame) {
  this.frames = []
  for (var i = 0; i < 10; i++) {
    this.frames.push(new frame);
  };
}

Game.prototype.recordRoll = function(numberOfPins) {
  return numberOfPins;
};
