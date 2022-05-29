class Game {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  calculateScore() {
    let score = 0;
    this.rolls.map((pins) => (score += pins));
    return score;
  }
}

module.exports = Game;
