class Scorer {

  constructor() {
    this.scores = [];
    this.frames = [];
    this.MAXFRAMES = 10;
    this.ALLPINS = 10;
  }

  // This method adds the frame and sends it to the appropriate scoring method
  addFrame(frame) {
    if (this._isUpdateNeeded()) {
      this._updateScores(frame, this._calculate.bind(this));
    } else {
      this._calculate(frame);
    }
    this.frames.push(frame);
  }

  // This method updates previous scores that have not yet been entered
  // ie strikes and scores waiting for bonus rolls
  _updateScores(frame, callback) {
    if (this._isConsecutiveStrikeInProgress()) {
      this._consecStrikeBonus(frame);
    } else if (!frame.isaStrike()) {
      this._strikeBonus(frame);
    }
    if (callback && typeof(callback) === "function") {
      callback(frame); // continue to calculate current frame if appropriate
    }
  }

  _isUpdateNeeded() {
    return !(this.frames.length === this.scores.length)
  }

  spareUpdateNeeded() {
    if (this._isUpdateNeeded() && this.frames.length > 0) {
      return this._lastFrame().isaSpare();
    }
  }

  _lastFrame() {
    return this.frames[this.frames.length - 1]
  }

  _isConsecutiveStrikeInProgress() {
    if (this.frames.length > 1) {
      let lastTwoFrames = this.frames.slice(this.frames.length - 2);
      return lastTwoFrames[0].isaStrike() && lastTwoFrames[1].isaStrike()
    }
  }

  _calculate(frame) {
    if (frame.isNotStrikeOrSpare()) {
      this.scores.push(frame.result())
    }
  }

  total() {
    if (this.scores.length > this.MAXFRAMES) {
      return this.scores.slice(0, this.MAXFRAMES).reduce((a, b) => a + b, 0);
    } else {
      return this.scores.reduce((a, b) => a + b, 0);
    }
  }

  spareBonus(pins) {
    this.scores.push(this.ALLPINS + pins);
  }

  _strikeBonus(frame) {
    this.scores.push(this.ALLPINS + frame.result());
  }

  _consecStrikeBonus(frame) {
    this.scores.push(2 * this.ALLPINS + frame.result());
    if (!frame.isaStrike()) {
      this._strikeBonus(frame);
    }
  }

}
