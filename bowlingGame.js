class Bowling {
  constructor() {
    this.totalScore = 0;
    this.turn = 1;
  }
  getTotalScore() {
    return this.totalScore;
  }
  roll(pins) {
    this.totalScore += pins;
    this.changeTurn()
  }
  getTurn() {
    return this.turn;
  }
  changeTurn() {
    if(this.turn === 1) { this.turn = 2}
    else if(this.turn === 2) { this.turn = 1}
  }
}

module.exports = Bowling