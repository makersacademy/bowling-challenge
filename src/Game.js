function Game() {
  this.gameScore = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]}
  this.frameCount = 1
  this.bowlCount = 0
}

Game.prototype.getScore = function () {
  return this.gameScore
}

Game.prototype.bowl = function (score ) {
  if (this.bowlCount === 1) {
    this.gameScore[this.frameCount].push(score)
    this.bowlCount += 0
    this.frameCount += 1
  }
  else {
    this.gameScore[this.frameCount].push(score)
    this.bowlCount += 1
  }
}

// Game.prototype.getFrameScore = function () {
//   return this.frameScore
// }

// Game.prototype.framePush = function () {
//   this.gameScore.push(this.frameScore)
// }

