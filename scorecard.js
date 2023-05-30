class Scorecard {
  constructor() {
    this.scores = [];
  }

  getScores() {
    return this.scores;
  }

  addFrame(frame) {
    const newFrame = { frame: frame };
    this.scores.push(newFrame);
    this.#calculateScore();
  }

  #calculateScore() {
    let currentTotal = 0;
    this.scores.forEach((score, index) => {
      if (score.score) {
        currentTotal = score.score;
        return;
      }

      const frameTotal = this.#frameTotal(score);

      if (frameTotal < 10 || score.frame.length === 3) {
        currentTotal += frameTotal;
        score.score = currentTotal;
      } else if (score.frame.length === 2) {
        currentTotal = this.#addBonus("spare", index, currentTotal, frameTotal, score);
      } else if (score.frame.length === 1) {
        currentTotal = this.#addBonus("strike", index, currentTotal, frameTotal, score);
      } else {
        console.log("Error");
      }
    });
    return currentTotal;
  }

  #frameTotal(score) {
    return score.frame.reduce((a, b) => a + b, 0);
  }

  #addBonus(type, index, currentTotal, frameTotal, score) {
    const bonus = type === "strike" ? this.#calculateStrikeBonus(index) : this.#calculateSpareBonus(index);

    if (bonus) {
      currentTotal += frameTotal + bonus;
      score.score = currentTotal;
      return currentTotal;
    }
  }

  #calculateSpareBonus(index) {
    if (this.scores[index + 1]) {
      return this.scores[index + 1].frame[0];
    }
  }

  #calculateStrikeBonus(index) {
    if (this.scores[index + 2]) {
      return this.scores[index + 2].frame[0] + this.scores[index + 1].frame[0];
    } else if (this.scores[index + 1] && this.scores[index + 1].frame.length > 1) {
      return this.scores[index + 1].frame[0] + this.scores[index + 1].frame[1];
    }
  }
}

module.exports = Scorecard;
