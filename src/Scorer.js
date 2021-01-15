class Scorer {

  constructor() {
    this.scores = [];
    this.frames = [];
  }

  addFrame(frame) {
    this.frames.push(frame);
    if (this.frames.length > 1) {
      if (this._lastFrame()._isaSpare()) {
        return this.calculate(frame, this._sparebonus.bind(this))
      } else if (this._lastFrame()._isaStrike()) {
        return this.calculate(frame, this._strikebonus.bind(this))
      }
    }
    this.calculate(frame)
  }

  _lastFrame() {
    return this.frames[this.frames.length - 2]
  }

  _isConsecutiveStrikeInProgress() {
    return this.frames[this.frames.length - 3]._isaStrike() && this._lastFrame()._isaStrike()
  }

  calculate(frame, callback) {
    if (frame._isaSpare()) {
      this.scores.push('/');
    } else if (frame._isaStrike()) {
      this.scores.push('X');
    } else {
      this.scores.push(frame.result())
    }
    if(callback && typeof(callback) === "function") {
      callback(frame);
    }
  }

  total() {
    return this.scores.reduce((a, b) => a + b );
  }

  _sparebonus(frame) {
    this.scores[this.scores.length - 2] = 10 + frame.pins[0];
  }

  _strikebonus(frame) {
    this.scores[this.scores.length - 2] = 10 + frame.pins[0] + frame.pins[1];
  }

}
