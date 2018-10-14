function BowlingGame(name) {
  this.playerName = name
  this.currentScore = 0
  this.allThrows = []
  this.currentFrame = 1
  this.currentThrow = 1
}

BowlingGame.prototype.throw = function (pins) {
  this.allThrows.push(pins)
  if (pins == 10 && this.currentThrow == 1) {
    this.allThrows.push(null)
    this.currentFrame += 1
    this.currentthrow = 1
  } else {
    this.updateThrowFrame();
  }
};

BowlingGame.prototype.updateThrowFrame = function () {
  if (this.currentThrow == 2) {
    this.currentThrow = 1
    this.currentFrame += 1
  } else {
    this.currentThrow += 1
  }
};

BowlingGame.prototype.calculateScore = function () {
  this.currentScore = 0
  var noOfThrows = this.allThrows.length
  if (this.allThrows[noOfThrows-1] == null && this.allThrows[noOfThrows] == null) {
    return null
  } else if (this.allThrows[noOfThrows-1] + this.allThrows[noOfThrows-2] == 10) {
    return null
  } else {
    for (var i = 0; i < noOfThrows; i++) {
      if (i % 2 == 1 && this.allThrows[i-3] == 10) { //case for strike
        if (this.allThrows[i] == null) {
          this.currentscore += (2*this.allThrows[i-1] + 2*this.allThrows[i-3])
        } else {
          this.currentScore += 2*this.allThrows[i] + this.allThrows[i-1]
        }
      } else if (i % 2 == 0 && (this.allThrows[i-1] + this.allThrows[i-2]) == 10 && this.allThrows[i-2] !== 10) { //case for spare
        this.currentScore += 2*this.allThrows[i]
      } else {
        this.currentScore += this.allThrows[i] //case without strike or spare
      }
    }
  }
  console.log(this.currentScore)
};
