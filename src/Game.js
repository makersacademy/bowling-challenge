// The game class has frames and keeps score

'use strict';

function Game() {
  this.score = 0
  this._frames = []
}

Game.prototype.addFrames = function(frame) {
  this._frames.push(frame);
};
