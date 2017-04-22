'use strict()';

function Game() {
  this._frames = []
  this._frame = 1
  this._currentFrame = new Frame(this._frame)
  this._gameOver = false
}

Game.prototype.roll = function() {
  this._currentFrame.roll()
  if(this._currentFrame.isFinished() && this._frame >= 10) {
   this._endGame()
 } else if (this._currentFrame.isFinished()) {
    this.updateAndStore()
  }
}

Game.prototype.updateAndStore = function () {
  this._processFrame()
  this._storeFrame();
  this._currentFrame = new Frame(this._frame);
}


Game.prototype._endGame = function () {
  this._processFrame()
  if(this._frame === 10) {
     this._storeFrame();
  }
  if(this._currentFrame.bonusFeature() === 'strike' || this._currentFrame.bonusFeature() === 'spare') {
    this._applyBonusRolls()
  } else {
    this._gameOver = true
  }
}

Game.prototype._applyBonusRolls = function() {
  if(this._currentFrame.bonusFeature() === 'strike') {
    this._currentFrame = new BonusRolls(2);
  } else if (this._currentFrame.bonusFeature() === 'spare') {
    this._currentFrame = new BonusRolls(1);
  }
}

Game.prototype._storeFrame = function() {
  this._frames.push(this._currentFrame);
  this._frame += 1
}

Game.prototype._processFrame = function() {
  if(this._frame > 1) {
    this._addBonuses()
  }
  if(this._frame > 2) {
    this._checkIfBakfast()
  }
}

Game.prototype.isFinished = function() {
  if(this._gameOver === true) {
    return true } else {
    return false
  }
}

Game.prototype._checkIfBakfast = function() {
  if(this._lastFrame().bonusFeature() === 'strike' && this._lastLastFrame().bonusFeature() === 'strike') {
    this._bakBonus()
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
  if(this._lastFrame().bonusFeature() === 'spare') {
    this._spareBonus()
  } else if(this._lastFrame().bonusFeature() === 'strike') {
    this._strikeBonus()
  }
}

Game.prototype._spareBonus = function() {
  this._lastFrame().addBonus(this._currentFrame.spareBonus())
}

Game.prototype._strikeBonus = function() {
  this._lastFrame().addBonus(this._currentFrame.strikeBonus())
}

Game.prototype._bakBonus = function() {
  this._lastLastFrame().addBonus(this._currentFrame.spareBonus())
}

Game.prototype._lastFrame = function() {
  return this._frames[this._frames.length - 1]
}

Game.prototype._lastLastFrame = function() {
  return this._frames[this._frames.length - 2]
}
