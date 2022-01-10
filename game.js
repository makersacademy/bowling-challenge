const FrameClass = require('./frame');

class Game {
  constructor(Frame = FrameClass) {
    this.frames = [];
    for (let i = 0; i < 10; i++) {
      this.frames.push(new Frame());
    }
  }

  roll(points) {
    for (let i = 0; i < 9; i++) {
      if (this.frames[i].rolls.length < 2 && this.frames[i].isStrike() === false) {
        this.frames[i].addRoll(points);
        return;
      }
    }
    this.frames[9].addRoll(points);
  }

  addBonuses() {
    this.frames.forEach((frame, index) => {
      if (frame.isSpare() == true) {
        frame.bonus = this.frames[index + 1].rolls[0];
      } else if (frame.isStrike() == true) {
        frame.bonus = this.frames[index + 1].rolls[0] + this.frames[index + 1].rolls[1];
      }
    });
  }

  score() {
    this.addBonuses();
    const reducer = (previousValue, currentValue) => previousValue + currentValue.totalScore();
    return this.frames.reduce(reducer, 0);
  }
}

module.exports = Game;
