
function Game () {
  this.gameScores = []
  this.score = 0
  this.currentFrame = new Frame (this)
  this.strike = false
}

Game.prototype.updateScore = function (frame) {
  if (this.strike === true) {
    this.score += ((this.currentFrame.bowlOne() + this.currentFrame.bowlTwo()) * 2)
  } else {
  this.score += (this.currentFrame.bowlOne() + this.currentFrame.bowlTwo())
  }
  this.addScore()
  this.currentFrame = new Frame(this)
  this.currentFrame.frameNumber ++
}

Game.prototype.addScore = function () {
  this.gameScores.push(this.score)
}
