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
  this.gameOver()
  this.bowl1 += amount
  this.pins -= this.bowl1
  this.endFrameCheck()
}
Frame.prototype.secondBowl = function (amount) {
  this.gameOver()
  this.bowl2 += amount
  this.pins -= this.bowl2
  this.endFrame()
}

Frame.prototype.pinsCheck = function () {
  if (this.pins === 0) {
    return true
  }
}

Frame.prototype.strike = function () {
  this.game.strikeLast = true
}
Frame.prototype.spare = function () {
  this.game.spareLast = true
}

Frame.prototype.endFrameCheck = function (amount) {
  if (this.strikeBonus()) {
    this.tenthBonus()
  } else {
    if (this.pinsCheck()) {
      this.game.updateScore()
      this.strike()
    }
  }
}

Frame.prototype.endFrame = function (amount) {
  if (this.strikeBonus()) {
    this.bonus2 += amount
  }
  if (this.bowl1 > 0 && this.bowl2 === 10) {
    this.game.updateScore(this)
    this.strike()
  } else if (this.pins === 0) {
    this.game.updateScore(this)
    this.spare()
  } else {
    this.game.updateScore(this)
  }
}

Frame.prototype.strikeBonus = function () {
  if (this.frameNumber === 'Strike Bonus') {
    return true
  }
}

Frame.prototype.spareBonus = function () {
  if (this.frameNumber === 'Spare Bonus') {
    return true
  }
}

Frame.prototype.gameOver = function () {
  if (this.frameNumber >= 11) {
    throw ('The game is over')
  }
}

Frame.prototype.tenthBonus = function (amount) {
  if (this.strikeBonus()) {
    this.bonus1 += amount
  } else if (this.spareBonus()) {
    this.bonus1 += amount
  }
}
