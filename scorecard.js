const Frame = require('./frame');

class Scorecard {
  constructor(frameClass = Frame) {
    this.frameClass = frameClass;
    this.frames = [];
  }

  addFrame(...scores) {
    this.frames.push(new this.frameClass(...scores));
  }

  getScore() {
    return this.frames.slice(0, 10).reduce((acc, frame, index) => {
      return acc + frame.getBaseScore() + this.#getBonusPoints(index)
    }, 0)
  }

  isPerfectGame() {
    return this.getScore() == 300;
  }

  isGutterGame() {
    return this.getScore() == 0;
  }

  #getBonusPoints(currentIndex){
    const frame = this.frames[currentIndex];
    if (frame.isSpare()) return this.#getNextRollScore(currentIndex);
    if (frame.isStrike()) return this.#getNextTwoRollsScore(currentIndex);
    return 0;
  }

  #getNextRollScore(currentIndex) {
    return this.frames[currentIndex + 1].scores[0];
  }

  #getNextTwoRollsScore(currentIndex) {
    const firstRoll = this.#getNextRollScore(currentIndex)
    const secondRoll = this.frames[currentIndex + 1].scores[1]
      || this.frames[currentIndex + 2].scores[0]

    return firstRoll + secondRoll
  }
}

module.exports = Scorecard;