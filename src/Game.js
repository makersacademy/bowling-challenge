'use strict'

function Game() {
  this._frames = []
}

Game.prototype.addFrame = function(frame = new Frame()) {
  this._frames.push(frame)
}

Game.prototype.frames = function() {
  return this._frames
}

