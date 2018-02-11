class Game {
  constructor(FrameHistory, Frame, Rules) {
    this.maxFrames = 10;
    this.frameNumber = 0;
    this.history = new FrameHistory();
    this.FrameObject = Frame;
    this.RulesObject = new Rules();
  }

  startFrame() {
    if (this.maxFrames - 1 === this.frameNumber) {
      throw Error('Need to start final frame');
    } else {
      this.currentFrame = new this.FrameObject(this.RulesObject);
      this.frameNumber += 1;
    }
  }

  finishFrame() {
    this.history.add(this.currentFrame);
  }
}

module.exports = Game;
