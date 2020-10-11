class Scorecard {
  constructor(frames = [new Frame(1)]) {
    this.frames = frames;
  }

  addRoll(pins, callback) {
    let roll = new Roll(pins);
    this._currentFrame().addRoll(roll);
    this._updateFrames();
    callback();
  }

  calcRunningScore(frameNumber) {
    let score = 0;
    for (let i = 1; i < frameNumber + 1; i++) {
      let frameScore = this._getFrameScore(i);
      if (frameScore === undefined) { return undefined; }
      if (frameScore === false) { return undefined; }
      score += frameScore;
    }
    return score;
  }

  _getFrameScore(frameNumber) {
    let i = frameNumber - 1;
    if (this.frames[i] === undefined) {
      return undefined;
    } else if (this.frames[i + 1] !== undefined && this.frames[i + 2] !== undefined) {
      return this.frames[i].scoreFrame(this.frames[i + 1], this.frames[i + 2]);
    } else if (this.frames[i + 1] !== undefined) {
      return this.frames[i].scoreFrame(this.frames[i + 1]);
    } else {
      return this.frames[i].scoreFrame();
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