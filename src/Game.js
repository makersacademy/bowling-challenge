class Game {
  constructor(FrameHistory, Frame, Rules) {
    this.maxFrames = 10;
    this.history = new FrameHistory();
    this.frameObject = Frame;
    this.rulesObject = Rules;
  }
}

module.exports = Game;
