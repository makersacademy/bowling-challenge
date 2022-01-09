const FrameClass = require('./frame')

class Game {
  constructor() {
    this.frames = [];
    this.newFrame = true;
  }

  addFrame(Frame = FrameClass) {
    this.frames.push(new Frame());
  }

  roll() {
    if (this.newFrame == true) {
      this.addFrame();
    }
    this.frames.at(-1).addRoll()
  }
}

module.exports = Game;