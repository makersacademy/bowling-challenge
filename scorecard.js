const Frame = require('./frame');

class Scorecard {
  constructor() {
    this.frames = [];
  }

  addFrame(...scores) {

    this.frames.push(new Frame(...scores));
  }

  getScore() {
    let totalScore = 0
    this.frames.slice(0, 10).forEach((frame, index) => {
      totalScore +=  frame.getBaseScore();
      if (frame.isSpare()) {
        totalScore += this.#getNextRollScore(index);
      } else if (frame.isStrike()) {
        totalScore += this.#getNextTwoRollsScore(index);
      }
    })
    return totalScore;
  }

  isPerfectGame() {
    return this.getScore() == 300;
  }

  isGutterGame() {
    return this.getScore() == 0;
  }

  #getNextRollScore(currentIndex) {
    return this.frames[currentIndex + 1].scores[0];
  }

  #getNextTwoRollsScore(currentIndex) {
    const nextFrame = this.frames[currentIndex + 1];
    let score = nextFrame.scores[0];
    if (nextFrame.scores.length == 2) {
      score += nextFrame.scores[1];
    } else {
      score += this.frames[currentIndex + 2].scores[0]
    }
    return score;
  }
}

module.exports = Scorecard;