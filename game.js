class Game {

  constructor() {
    this.frames = []
  }

  addFrame(frame) {
    this.frames.push(frame);
  }

  strikeBonuses() {
    this.strikeBonus = 0;
    this.frames.forEach((x, i) => x.strike() ? this.strikeBonus += this.frames[i+1].score() : null);
    return this.strikeBonus;
  }

  totalScore() {
    let total = 0;
    this.frames.forEach(x => total += x.score());
    return total + this.strikeBonuses();
  }
}


module.exports = Game;


