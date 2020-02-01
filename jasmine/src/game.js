'use strict'

function Game () {
  this._frames = []
  this.LAST_FRAME = 10
  this._pointsStorage = []
}

Game.prototype.addFrame = function () {
  if (this.frameNumber() === this.LAST_FRAME) throw new Error("This game is over, can't play for ever!")

  this._frames.push(new Frame())
}

Game.prototype.new = function () {
  for (let i = 0; i < 10; i++) {
    this.addFrame()
  }
}

Game.prototype.frameNumber = function () {
  return this._frames.length
}

Game.prototype.getPoints = function () {
  return this._pointsStorage.reduce((acc, val) => acc + val)
}

Game.prototype.currentFrame = function () {
  return this._frames.find(frame => !frame.isCompleted())
}

Game.prototype.previousFrame = function () {
  const index = this._frames.indexOf(this.currentFrame()) - 1
  return this._frames[index]
}

Game.prototype.nextFrame = function () {
  const index = this._frames.indexOf(this.currentFrame()) + 1
  return this._frames[index]
}

Game.prototype.twoPreviousFrame = function () {
  const index = this._frames.indexOf(this.currentFrame()) - 2
  return this._frames[index]
}

Game.prototype.threePreviousFrame = function () {
  const index = this._frames.indexOf(this.currentFrame()) - 3
  return this._frames[index]
}

Game.prototype.addPoints = function () {
  this._pointsStorage.push(this.previousFrame().total())

  if (this.threePreviousFrame() !== undefined && this.threePreviousFrame().isStrike() && this.twoPreviousFrame().isStrike()) {
    this._pointsStorage[this._frames.indexOf(this.threePreviousFrame())] += this.twoPreviousFrame().getShot(1)
    this._pointsStorage[this._frames.indexOf(this.threePreviousFrame())] += this.previousFrame().getShot(1)
  }
  if (this.twoPreviousFrame() !== undefined && this.twoPreviousFrame().isStrike() && !this.previousFrame().isStrike()) {
    this._pointsStorage[this._frames.indexOf(this.twoPreviousFrame())] += this.previousFrame().total()
  }
  if (this.twoPreviousFrame() !== undefined && this.twoPreviousFrame().isSpare()) {
    this._pointsStorage[this._frames.indexOf(this.twoPreviousFrame())] += this.previousFrame().getShot(1)
  }
}
