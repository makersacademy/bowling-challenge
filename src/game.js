class Game {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  getScore() {
    let score = 0;
    for (let i = 0; i < 20; i++) { score += this.rolls[i] }
    return score;
  }
}
