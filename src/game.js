
function Game () {
  this.gameScores = []
  this.score = 0
  this.currentFrame = new Frame(this)
  this.strike = false
}


Game.prototype.updateScore = function (frame) {
  if (this.strike === true) {
    this.strikeBonus(frame)
  } else if (this.spare === true) {
    this.spareBonus(frame)
  } else {
    this.score += (this.currentFrame.bowl1 + this.currentFrame.bowl2)
  }
  this.addScore()
  this.currentFrame = new Frame(this)
  if (this.gameScores.length === 1) {
    this.currentFrame.frameNumber = 2
  } else {
  this.currentFrame.frameNumber = this.gameScores.length + 1
  this.tenthFrame()
  }
}

Game.prototype.addScore = function () {
  this.gameScores.push(this.score)
}

Game.prototype.strikeBonus = function (frame) {
  this.score += ((this.currentFrame.bowl1 + this.currentFrame.bowl2) * 2)
}

Game.prototype.spareBonus = function (frame) {
  this.score += ((this.currentFrame.bowl1 * 2) + this.currentFrame.bowl2)
}

Game.prototype.tenthFrame = function () {
  if (this.currentFrame.frameNumber === 11) {
    if (this.strike === true) {
      this.currentFrame.frameNumber = 'Strike Bonus'
    } else if (this.spare === true) {
      this.currentFrame.frameNumber = 'Spare Bonus'
    }else {
      this.currentFrame.frameNumber = 'Game Over'
    }
  }
}
