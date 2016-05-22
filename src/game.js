
function Game () {
  this.gameScores = []
  this.score = 0
  this.currentFrame = new Frame(this)
  this.strikeLast = false
  this.spareLast = false
  this.strikerecords = []
}

Game.prototype.updateScore = function (frame) {
  this.bonusCheck()
  this.addScore()
  this.nextFrame()
  this.tenthFrame()
  this.addFinalBonus()
}

Game.prototype.bonusCheck = function (frame) {
  if (this.strikeLast === true) {
    this.strikeBonus(frame)
    this.strikerecords.push(1)
  } else if (this.spareLast === true) {
    this.spareBonus(frame)
  } else {
    this.score += (this.currentFrame.bowl1 + this.currentFrame.bowl2)
    this.strikerecords.push(0)
  }
}
Game.prototype.nextFrame = function () {
  this.currentFrame = new Frame(this)
  if (this.gameScores.length === 1) {
    this.currentFrame.frameNumber = 2
  } else {
    this.currentFrame.frameNumber = this.gameScores.length + 1
  }
}

Game.prototype.addScore = function () {
  this.gameScores.push(this.score)
}

Game.prototype.strikeBonus = function (frame) {
  if(this.gameScores.length < 10) {
    if (this.strikerecords[(this.gameScores.length -1)] === 1 && this.strikerecords[(this.gameScores.length - 2)] === 1) {
      this.score += 10
    }
  }
  this.score += ((this.currentFrame.bowl1 + this.currentFrame.bowl2) * 2)
}

Game.prototype.spareBonus = function (frame) {
  this.score += ((this.currentFrame.bowl1 * 2) + this.currentFrame.bowl2)
}

Game.prototype.tenthFrame = function () {
  if (this.currentFrame.frameNumber === 11) {
    if (this.strikeLast === true) {
      this.currentFrame.frameNumber = 'Strike Bonus'
    }else if (this.spareLast === true) {
      this.currentFrame.frameNumber = 'Spare Bonus'
    } else {
      this.currentFrame.frameNumber = 'Game Over'
    }
  }
}
Game.prototype.addFinalBonus = function () {
  if (this.frameNumber === 'Strike Bonus') {
    this.score += (this.currentFrame.bonus1 + this.currentFrame.bonus2)
  } else if (this.frameNumber === 'Spare Bonus') {
    this.score += this.currentFrame.bonus1
  }
}
