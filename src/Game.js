// The game class has frames and keeps score

'use strict';

function Game() {
  this.score = 0
  this.frames = []
}

Game.prototype.addFrames = function(frame) {
  this.frames.push(frame);
};

Game.prototype.updateScore = function() {
  for (var i = 0; i<this.frames.length; i++) {
    this.score = this.score + (this.frames[i].currentFrame[0] + this.frames[i].currentFrame[1]);
  };
};
