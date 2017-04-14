'use strict';

function BowlingGame () {
  this.frames = [];
  this.currentFrame = 0;
}

BowlingGame.prototype.getCurrentFrame = function() {
  return this.frames;
};

BowlingGame.prototype.addFrame = function(frame) {
  // this.currentFrame++;
  this.frames.push(frame);
};

BowlingGame.prototype.bowl = function(frame) {
  var pins = Math.floor(Math.random() * (10 - 0 + 1) + 0);
  frame.addToScore(pins);
  return pins;
}


// this.incrementRoll();
