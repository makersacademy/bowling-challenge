class Bowling {
  constructor(score = 0) {
    this.score = score;
  }

  game() {
    return this.score;
  }

  addScore(number) {
    if (number == 10) { 
      this.score += (number)
      return 'Strike!';
      }
      this.score += (number)
      return this.score;
  }
}

module.exports = Bowling;