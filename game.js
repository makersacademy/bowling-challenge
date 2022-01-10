const FrameClass = require('./frame')

class Game {
  constructor(Frame = FrameClass) {
    this.frames = [];
    for (let i = 0; i < 10; i++) {
      this.frames.push(new Frame())
    }
  }

  roll(points) {
    for (let i = 0; i < 9; i++) {
      if (this.frames[i].rolls.length < 2) {
        this.frames[i].addRoll(points);
        return;
      } 
    }
    this.frames[9].addRoll(points)
  }

  score() {
    let reducer = (previousValue, currentValue) => previousValue + currentValue.totalScore();
    return this.frames.reduce(reducer, 0);
  }
}

module.exports = Game;