class Game {
  constructor(FrameHistory, Frame, Rules) {
    this.maxFrames = 10;
    this.history = new FrameHistory();
    this.FrameObject = Frame;
    this.RulesObject = new Rules();
  }

  startFrame() {
    this.currentFrame = new this.FrameObject(this.RulesObject);
  }

  finishFrame() {
    this.history.add(this.currentFrame);
  }
}

module.exports = Game;
