const Frame = require('./frame')

class Game {

  constructor(frameClass = Frame) {
    this.frameClass = frameClass;
    this.currentFrame = new frameClass();
    this.frames = [];
  }

  inputRoll(pins) {
    this.currentFrame.roll(pins);
    if (this.currentFrame.isComplete()) {
      this.nextFrame();
    }
  }

  newFrame() {
    this.currentFrame = new this.frameClass();
  }

  logFrame() {
    this.frames.push(this.currentFrame);
  }

  nextFrame() {
    this.logFrame();
    this.newFrame();
  }

  getFrames() {
    return [...this.frames];
  }

}

module.exports = Game;