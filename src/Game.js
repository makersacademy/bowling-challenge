'use strict()';

function Game() {
  this._frames = []
  this._frame = 1
  this._currentFrame = new Frame(this._frame)
  this._bakfast = false
}

Game.prototype.roll = function() {
  this._currentFrame.roll()
  if(this._currentFrame.isFinished()) {
    this._addBonuses()
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

Game.prototype._addBonuses = function() {
  if(this._bakfast === true) {
    this.bakBonus()
  }
  if(this._frames.length > 0) {
    this._addBonus(this._frames[this._frames.length - 1], this._currentFrame)
  }

}

Game.prototype._storeFrame = function() {
  this._frames.push(this._currentFrame);
  this._frame += 1
  this._currentFrame = new Frame(this._frame);
}

Game.prototype._addBonus = function(lastFrame, thisFrame) {
  if(lastFrame.bonusFeature() === 'spare') {
    lastFrame.addBonus(thisFrame.spareBonus())
  } else if(lastFrame.bonusFeature() === 'strike') {
    lastFrame.addBonus(thisFrame.points())
  }
  if(lastFrame.bonusFeature() === 'strike' && thisFrame.bonusFeature() === 'strike') {
    this._bakfast = true
  } else {
    this._bakfast = false
  }
}

Game.prototype.bakBonus = function() {
  this._frames[this._frames.length - 2].addBonus(this._currentFrame.spareBonus())
}
