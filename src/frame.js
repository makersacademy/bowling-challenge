function Frame (game) {
  this.game = game
  this.frameNumber = 1
  this.pins = 10
  this.bowl1 = 0
  this.bowl2 = 0
  this.bonus1 = 0
  this.bonus2 = 0
}

Frame.prototype.firstBowl = function (amount) {
  this.bowl1 += amount
  this.pins -= this.bowl1
  this.endFrameCheck()
}
Frame.prototype.secondBowl = function (amount) {
  this.bowl2 += amount
  this.pins -= this.bowl2
  this.endFrame()
}

Frame.prototype.frameNumber = function () {
  return this.frameNumber
}

Frame.prototype.endFrameCheck = function (amount) {
  if (this.frameNumber === 'Strike Bonus') {
    this.bonus1 += amount
  } else if (this.frameNumber === 'Spare Bonus') {
    this.bonus1 += amount
  } else if (this.pins === 0) {
    this.game.updateScore()
    this.game.strike = true
  }
}
Frame.prototype.endFrame = function (amount) {
  if (this.frameNumber === 'Strike Bonus') {
    this.bonus2 += amount
  }
  if (this.bowl1 > 0 && this.bowl2 === 10) {
    this.game.updateScore(this)
    this.game.strike = true
  } else if (this.pins === 0) {
    this.game.updateScore(this)
    this.game.spare = true
  } else {
    this.game.updateScore(this)
  }
}
