function Frame (game) {
  this.game = game
  this.frameNumber = 1
  this.pins = 10
  this.bowl1 = 0
  this.bowl2 = 0
}

Frame.prototype.firstBowl = function () {
  this.bowl1 += Math.floor((Math.random() * 10) + 1)
  this.pins -= this.bowl1
  this.endFrameCheck()
  }
Frame.prototype.secondBowl = function () {
  this.bowl2 += Math.floor((Math.random() * 10) + 1)
  this.pins -= this.bowl2
  this.endFrame()
}

Frame.prototype.bowlOne = function () {
  return this.bowl1
}

Frame.prototype.bowlTwo = function () {
  return this.bowl2
}

Frame.prototype.frameNumber = function () {
  return this.frameNumber
}

Frame.prototype.endFrameCheck = function () {
  if (this.pins === 0) {
    this.game.updateScore()
    this.game.strike = true
  }
}
Frame.prototype.endFrame = function () {
  this.game.updateScore(this)
}
