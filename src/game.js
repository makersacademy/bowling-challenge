'use strict';

function Game() {
  this._allFrames = []
  this.MAX_FRAMES = 10

}

Game.prototype.start = function() {
  for (var i = 0; i < this.MAX_FRAMES; i++) {
    this._allFrames.push(new Frame)
  }
}

Game.prototype.all = function() {
  return this._allFrames;
}
