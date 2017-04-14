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
  if(this._frames.length > 0) {
    this._addBonus(this._frames[this._frames.length - 1], this._currentFrame)
  }
  if(this._frames.length > 1 && this._isBakfast()) {
    this._addBonus(this._frames[this._frames.length - 2], this._currentFrame)
  }
  this._frames.push(this._currentFrame);
  this._currentFrame = new Frame();
}

Game.prototype._addBonus = function(lastFrame, thisFrame){
  if(lastFrame.isSpare()) {
    lastFrame.addBonus(thisFrame.spareBonus())
  }
  if(lastFrame.isStrike()) {
    lastFrame.addBonus(thisFrame.points())
  }
}

Game.prototype._isBakfast = function() {
  if(this._frames[this._frames.length - 1].isStrike() && this._frames[this._frames.length - 2].isStrike()) {
    return true
  }
  return false
}
