function BowlingGame(name) {
  this.playerName = name
  this.currentScore = 0
  this.currentTurn = 0
  this.allThrows = []
}

BowlingGame.prototype.throw = function (pins) {
  this.allThrows.push(pins)
  if (pins == 10) {
    this.allThrows.push(0)
  }
};

BowlingGame.prototype.calculateScore = function () {
  this.currentScore = 0
  for (var i = 0; i < this.allThrows.length; i++) {
    if (i % 2 == 1 && this.allThrows[i-3] == 10) {
      this.currentScore += 2*this.allThrows[i] + this.allThrows[i-1]
    } else if (i % 2 == 0 && (this.allThrows[i-1] + this.allThrows[i-2]) == 10 && this.allThrows[i-2] !== 10) {
      this.currentScore += 2*this.allThrows[i]
    } else {
      this.currentScore += this.allThrows[i]
    }
    console.log(this.currentScore)
  }
};
