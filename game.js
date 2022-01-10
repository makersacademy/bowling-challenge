const FrameClass = require('./frame')

class Game {
  constructor(Frame = FrameClass) {
    this.frames = [];
    for (let i = 0; i < 10; i++) {
      this.frames.push(new Frame())
    }
  }

  roll() {
    this.frames[0].addRoll()
  }
}

module.exports = Game;