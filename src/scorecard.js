class Scorecard {
  constructor(frames = [new Frame(1)]) {
    this.frames = frames;
  }

  addRoll(pins) {
    let roll = new Roll(pins);
    this._currentFrame().addRoll(roll);
    this._updateFrames();
  }

  calcRunningScore(frameNumber) {
    let score = 0;
    for (let i = 0; i < frameNumber; i++) {
      let frameScore = this._getFrameScore(i);
      if (frameScore === false) { return false; }
      score += frameScore;
    }
    return score;
  }

  _getFrameScore(frameNumber) {
    if (this.frames[frameNumber + 1] !== undefined && this.frames[frameNumber + 2] !== undefined) {
      return this.frames[frameNumber].scoreFrame(this.frames[frameNumber + 1], this.frames[frameNumber + 2]);
    } else if (this.frames[frameNumber + 1] !== undefined) {
      return this.frames[frameNumber].scoreFrame(this.frames[frameNumber + 1]);
    } else {
      return this.frames[frameNumber].scoreFrame();
    }
  }

  _updateFrames() {
    if (this._currentFrame().isComplete() && this._currentFrame().number !== 10) {
      let nextFrameNum = this._currentFrame().number + 1;
      this.frames.push(new Frame(nextFrameNum));
    }
  }

  _currentFrame() {
    return this.frames[this.frames.length - 1];
  }
}