class Scorecard {
  constructor() {
    this.scores = [];
  }

  roll(pins) {
    this.scores.push(pins);
  }

  #getScores() {
    return this.scores;
  }

  calculateScore() {
    let totalScore = 0;
    let rollNumber = 0;

    for(let i = 0; i < this.frameNumber(); i++) {
      if(this.#isStrike(rollNumber)) { 
        totalScore += this.#strikeScore(rollNumber)
        rollNumber++;
      } else if (this.#isSpare(rollNumber)) {
        totalScore += this.#spareScore(rollNumber);
        rollNumber += 2
      } else {
        totalScore += this.#normalScore(rollNumber);
        rollNumber += 2
      }
    }
    return totalScore;
  }

  frameNumber() {
    if(this.#getScores().length + this.#strikeCount() > 20) {
      return 10;
    } else {
      return (this.#getScores().length + this.#strikeCount())/2;
    }
  }

  #strikeCount() {
    return this.#getScores().filter(roll => roll === 10).length;
  }

  #isStrike(index) {
    return this.scores[index] === 10;
  }

  #isSpare(index) {
    return this.scores[index] + this.scores[index + 1] === 10;
  }

  #strikeScore(index) {
    return 10 + this.scores[index + 1] + this.scores[index + 2];
  }

  #spareScore(index) {
    return 10 + this.scores[index + 2];
  }

  #normalScore(index) {
    return this.scores[index] + this.scores[index + 1];
  }
}

module.exports = Scorecard;

// game = new Scorecard;
// game.roll(10);
// game.roll(10);
// game.roll(10);
// game.roll(10);
// game.roll(3);
// game.roll(4);
// game.roll(3);
// game.roll(4);
// game.roll(3);
// game.roll(4);
// game.roll(3);
// game.roll(4);
// game.roll(3);
// game.roll(4);
// game.roll(7);
// game.roll(3);
// game.roll(7);
// console.log(game.calculateScore());