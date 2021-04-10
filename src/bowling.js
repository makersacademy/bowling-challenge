class Bowling {
  constructor() {
    this.frames = new Array;
    this.currentFrame = 0;
  }

  roll(pins) {
    this.createNewFrame();
    this.getCurrentScores().push(pins);
    this.updateBonusPoints(pins);
  }

  getCurrentScores() {
    return this.frames[this.currentFrame].scores;
  }

  createNewFrame() {
    if (this.frames.length == 0) {
      this.frames.push(new Frame);
    }
    if (this.getCurrentScores().length == 2) {
      this.frames.push(new Frame);
      this.currentFrame++;
    }
  }

  updateBonusPoints(pins) {
    if (this.currentFrame > 0) {
      var previousFrame = this.frames[this.currentFrame - 1];
      if(previousFrame.isSpare()) {
        previousFrame.scores.push(pins);
      }
    }
  }

}
