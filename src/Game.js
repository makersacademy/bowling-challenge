class Game {
  constructor(FrameHistory, Frame, Rules) {
    this.maxFrames = 10;
    this.frameNumber = 0;
    this.history = new FrameHistory();
    this.FrameObject = Frame;
    this.RulesObject = Rules;
    this.runningTotal = 0;
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
    this.computeRunningTotal();
  }

  computeRunningTotal() {
    this.runningTotal += this.currentFrame.baseScore;
  }
}

module.exports = Game;
