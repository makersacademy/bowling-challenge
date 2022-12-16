class Game {

  constructor() {
    this.frame = []
  }

  addFrame(frame) {
    this.frame.push(frame);
  }

  totalScore() {
    let total = 0;
    this.frame.forEach(x => total += x.score());
    return total;
  }
}

module.exports = Game;