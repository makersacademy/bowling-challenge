const Frame = require('./frame');

class Game {
  constructor(scorecard) {
    this.scorecard = scorecard;
    this.bonuses = [];
  }

  run() {
    this.#gameLoop()
    if (this.#hasFinalBonuses()) this.#playBonusRoll();
    this.scorecard.printFrames();
  }

  #gameLoop() {
    for (let i = 1; i <= 10; i++) {
      const frame = new Frame();
      this.#play(frame);
      this.scorecard.update(frame);
    }
  }

  #play(frame) {
    for (let i = 1; i <= 2; i++) {
      if (frame.isComplete()) return;
      const score = this.scorecard.getScore();
      this.#applyBonuses(score);
      const bonus = frame.addScore(score);
      if (bonus) this.bonuses.push(bonus);
    }
  }

  #applyBonuses(score) {
    this.bonuses = this.bonuses.filter((bonus) => {
      bonus.apply(score);
      return bonus.isActive();
    });
  }

  #hasFinalBonuses() {
    return this.bonuses.length > 0;
  }

  #playBonusRoll() {
    const score = this.scorecard.getScore();
    this.#applyBonuses(score);
    if (this.#hasFinalBonuses()) this.#playBonusRoll();
  }
}

module.exports = Game;
