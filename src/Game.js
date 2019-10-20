function Game() {
  this.gameScore = {1:[], 2:[], 3:[], 4:[],5:[],
                    6:[], 7:[], 8:[], 9:[], 10:[]}
  this.frameCount = 1
  this.bowlCount = 0
  this.total = 0
  this.bonusScores = {1:[], 2:[], 3:[], 4:[],5:[],
                      6:[], 7:[], 8:[], 9:[], 10:[]}
}

Game.prototype.getScore = function () {
  return this.gameScore
}

Game.prototype.bowl = function (pins ) {
  if (this.bowlCount === 1) {
    this.gameScore[this.frameCount].push(pins)
    this.bowlCount = 0
    this.frameCount += 1
  }
  else {
    this.gameScore[this.frameCount].push(pins)
    this.bowlCount += 1
    if (this.frameCount > 1) { this.bonus() }
    if (pins === 10 ) { 
      this.bowlCount = 0
      this.frameCount += 1
    }
  }
}

Game.prototype.totalScore = function () {
  for (var frame in this.gameScore) {
    vals = this.gameScore[frame]

    for (var i = 0; i<vals.length; i++) {
      this.total += vals[i]
    }
  }
  return this.total
}

Game.prototype.frame = function () {
  return this.frameCount
}

Game.prototype.frameTotal = function () {
  return this.gameScore[this.frameCount -1].reduce((a, b) => a + b, 0)
}

Game.prototype.isHalfStrike = function () {
  return this.frameTotal() === 10 ? true  : false 
}

Game.prototype.bonus = function () {
  if (this.isHalfStrike()) {
    this.bonusScores[this.frameCount-1] = this.gameScore[this.frameCount][0]
  }
}