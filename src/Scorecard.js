function Scorecard(frame = Frame) {
  this.frame = frame;
  this.FRAMES_TOTAL = 10;
  this.frameLog = [];
  this._score = 0;
  this.frameNumber = 1;
}

Scorecard.prototype = {

  constructor: Scorecard,

  roll(pins) {
    this._startNewFrame();
    this._currentFrame().roll(pins);
    this._updateScore();
  },

  total() {
    return this._score;
  },

  isComplete() {
    if (this.frameLog.length > this.FRAMES_TOTAL) {
      return true;
    } else if (this._currentFrame().isComplete() === false) {
      return false;
    } else if (this.frameLog.length < this.FRAMES_TOTAL || this._tenthFrameIsStrikeOrSpare()) {
      return false;
    }
    return true;
  },

  _updateScore() {
    this._addSpareBonus();
    this._addStrikeBonus();
    if (this._currentFrame().isComplete() === true) {
      this._updateStrikeBonus();
      this.frameNumber += 1;
      return this._score += (this._currentFrame().score());
    }
  },

  _startNewFrame() {
    if (this.frameLog.length === 0 || this._currentFrame().isComplete()) {
      this.frameLog.push(new this.frame());
    }
  },

  _currentFrame() {
    return this.frameLog[this.frameLog.length - 1];
  },

  _previousFrame() {
    return this.frameLog[this.frameLog.length - 2];
  },

  _previousButOneFrame() {
    return this.frameLog[this.frameLog.length - 3];
  },

  _addSpareBonus() {
    if (this._isPreviousFrameSpare()) {
      this._previousFrame().bonus += this._currentFrame().firstRoll;
      this._score += this._previousFrame().bonus;
    }
  },

  _addStrikeBonus() {
    if (this.frameLog.length > this.FRAMES_TOTAL) {
      return;
    }
    if (this._isPreviousFrameStrike() && this._currentFrame().isComplete()) {
      this._previousFrame().bonus += this._currentFrame().score();
      this._score += this._previousFrame().bonus;
    }
  },

  _updateStrikeBonus() {
    if (this.frameLog.length > 11) {
      return;
    }
    if (this._isPreviousButOneFrameStrike() && this._previousFrame().isStrike()) {
      this._previousButOneFrame().bonus += this._currentFrame().firstRoll;
      this._score += this._currentFrame().firstRoll;
    }
  },

  _isPreviousFrameSpare() {
    if (this._previousFrame() !== undefined && this._previousFrame().isSpare()) {
      return true;
    }
    return false;
  },

  _isPreviousFrameStrike() {
    if (this._previousFrame() !== undefined && this._previousFrame().isStrike()) {
      return true;
    }
    return false;
  },

  _isPreviousButOneFrameStrike() {
    if (this._previousButOneFrame() !== undefined && this._previousButOneFrame().isStrike()) {
      return true;
    }
    return false;
  },

  _tenthFrameIsStrikeOrSpare() {
    if (this.frameLog[9].score() === 10) {
      return true;
    }
    return false;
  },

};

if (typeof module !== 'undefined') {
  module.exports = Scorecard;
}
