class Game {
  constructor() {
    this.frames = [];
    this.MAX_FRAMES = 10;
    this.playerScores;
    this.frameLoop = 1;
    this.gameTotal = 0;
  }

  score(playerScores) {
    this.playerScores = playerScores;
    this._loopCreateFrames();
    this._loopSumFrames();
    return this.gameTotal;
  }

  resetScores() {
    this.gameTotal = 0;
    this.frameLoop = 1;
    this.frames = [];
    this.frames.forEach((frame) => {
      frame.frameTotal = 0;
    });
  }

  _gameResult() {
    this.gameTotal;
  }

  _loopSumFrames() {
    this.frames.forEach((frame) => {
      frame.calculateFrameTotal();
      this.gameTotal += frame.frameTotal;
    });
  }

  _loopCreateFrames() {
    while (this.frameLoop <= this.MAX_FRAMES) {
      this._createFrames(); // creating frames 1 by 1 in loop
      this.frameLoop++;
    }
  }

  _sumTotal() {}

  _createFrames() {
    let frame = this._createFrameInstance();
    this.frames.push(frame);
  }

  _createFrameInstance() {
    return new Frame({
      frameNumber: this.frameLoop,
      currentFrame: this.playerScores[this.frameLoop - 1],
      followingFrameOne: this.playerScores[this.frameLoop],
      followingFrameTwo: this.playerScores[this.frameLoop + 1],
    });
  }
}
