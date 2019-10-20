
class Bowling {
  constructor() {
    this.score = 0;
    this.frames = [];
  }

  getCurrentScore() {
    return this.score;
  }

  roll(pins) {
    this.score += pins;
  }
}

module.exports = Bowling;
