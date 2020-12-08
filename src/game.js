class Game {
  constructor() {
    this.frames = [];
    this.runningScore = 0;
  }

  getRunningScore() {
    return this.runningScore;
  }

  getFrames() {
    return this.frames;
  }

  currentFrameNumber() {
    return this.frames.length;
  }

  currentFrameObject() {
    return this.frames[this.currentFrameNumber() - 1];
  }

  newFrame(frame) {
    this.frames.push(frame);
  }

  knocked(pins) {
    this.currentFrameObject().inputRollScore(pins);
  }

  updateScore() {
    this._normalUpdate();
    if (this.currentFrameNumber() >= 2) {
      this._doubleUpdate();
    }
    if (this.currentFrameNumber() >= 3) {
      this._tripleUpdate();
    }
    var score = 0
    this.frames.forEach(function(item) {
      score += item.getTotalScore();
    });
    this.runningScore = score;
  }

  _normalUpdate() {
    this.currentFrameObject().addScore(this.currentFrameObject().pinsKnocked());
  }

  _doubleUpdate() {
    if (this.frames[this.currentFrameNumber() - 2].isStrike()) {
      console.log("In double update function, score to be added: "+this.currentFrameObject().pointsForStrike());
      this.frames[this.currentFrameNumber() - 2].addScore(this.currentFrameObject().pointsForStrike());
    } else if (this.frames[this.currentFrameNumber() - 2].isSpare()) {
      this.frames[this.currentFrameNumber() - 2].addScore(this.currentFrameObject().pointsForSpare());
    }
  }

  _tripleUpdate() {
    if (this.currentFrameObject().isStrike() &&
        this.frames[this.currentFrameNumber() - 2].isStrike() &&
        this.frames[this.currentFrameNumber() - 3].isStrike()) {
          this.frames[this.currentFrameNumber() - 3].addScore(10);
        }
  }
}
