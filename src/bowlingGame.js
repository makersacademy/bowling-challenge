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
