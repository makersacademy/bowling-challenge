'use strict()';

function Game() {
  this._frames = []
  this._currentFrame = new Frame()
}

Game.prototype.roll = function() {
  this._currentFrame.roll()
  if(this._currentFrame.isFinished()) {
    this._storeFrame()
  }
}

Game.prototype.total = function() {
  var total = 0
  this._frames.forEach(function(frame) {
    total += frame.points()
  })
  return total
}

Game.prototype._storeFrame = function() {
  this._frames.push(this._currentFrame);
  this._currentFrame = new Frame();
  this._addSpareBonus
}
