
function Game () {
  this.gameScores = []
  this.score = 0
  this.currentFrame = new Frame (this)
}

Game.prototype.updateScore = function (frame) {
  this.score += (this.currentFrame.bowlOne() + this.currentFrame.bowlTwo())
  this.addScore()
  this.currentFrame = new Frame(this)
  this.currentFrame.frameNumber ++
}

Game.prototype.addScore = function () {
  this.gameScores.push(this.score)
}
