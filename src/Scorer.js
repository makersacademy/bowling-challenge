class Scorer {

  constructor() {
    this.scores = [];
    this.frames = [];
  }

  addFrame(frame) {
    if (this.updateNeeded()) {
      this.updateScores(frame, this.calculate.bind(this));
    } else {
      this.calculate(frame);
    }
    this.frames.push(frame);
  }

  updateScores(frame, callback) {
    if (this._isConsecutiveStrikeInProgress()) {
      this._consecStrikeBonus(frame);
    } else if (!frame._isaStrike()) {
      this._strikeBonus(frame);
    }
    if (callback && typeof(callback) === "function") {
      callback(frame);
    }
  }

  updateNeeded() {
    return !(this.frames.length === this.scores.length)
  }

  _spareUpdateNeeded() {
    if (this.updateNeeded() && this.frames.length > 0) {
      return this._lastFrame()._isaSpare();
    }
  }

  _lastFrame() {
    return this.frames[this.frames.length - 1]
  }

  _isConsecutiveStrikeInProgress() {
    if (this.frames.length > 1) {
      let lastTwoFrames = this.frames.slice(this.frames.length - 2);
      return lastTwoFrames[0]._isaStrike() && lastTwoFrames[1]._isaStrike()
    }
  }

  calculate(frame) {
    if (frame._isNotStrikeOrSpare()) {
      this.scores.push(frame.result())
    }
  }

  total() {
    return this.scores.reduce((a, b) => a + b, 0);
  }

  _spareBonus(pins) {
    this.scores.push(10 + pins);
  }

  _strikeBonus(frame) {
    this.scores.push(10 + frame.result());
  }

  _consecStrikeBonus(frame) {
    this.scores.push(20 + frame.result());
    if (!frame._isaStrike()) {
      this._strikeBonus(frame);
    }
  }

}
