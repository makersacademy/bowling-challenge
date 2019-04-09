function Scorecard (frame = Frame) {
  this.frame = frame;
  this.framesTotal = 10;
  this.frameLog = [];
  this._score = 0
  this.frameNumber = 1;
}

Scorecard.prototype = {

  constructor: Scorecard,

  roll: function(pins) {
    this._startNewFrame();
    this._currentFrame().roll(pins);
    this._updateScore();
  },

  total: function() {
    return this._score
  },

  isComplete: function() {
    if ( this.frameLog.length < this.framesTotal ) {
      return false;
    } else {
      return true;
    }
  },

  _startNewFrame: function() {
    if (this.frameLog.length === 0 || this._currentFrame().isComplete()) {
      this.frameLog.push(new this.frame());
    }
  },

  _currentFrame: function() {
    return this.frameLog[this.frameLog.length - 1]
  },

  _previousFrame: function() {
    return this.frameLog[this.frameLog.length - 2]
  },

  _updateScore: function() {
    this._addSpareBonus();
    this._addStrikeBonus();
    if (this._currentFrame().isComplete() === true) {
      return this._score += (this._currentFrame().score());
      this.frameNumber += 1;
    }
  },

  _addSpareBonus: function() {
    if (this._isPreviousFrameSpare()) {
      this._previousFrame().bonus += this._currentFrame().firstRoll
      this._score += this._previousFrame().bonus
    }
  },

  _addStrikeBonus: function() {
    if (this._isPreviousFrameStrike() && this._currentFrame().isComplete()) {
      this._previousFrame().bonus += this._currentFrame().score();
      this._score += this._previousFrame().bonus;
    }
  },

  _isPreviousFrameSpare: function() {
    if (this._previousFrame() !== undefined && this._previousFrame().isSpare()) {
      return true;
    } else {
      return false;
    }
  },

  _isPreviousFrameStrike: function() {
    if (this._previousFrame() !== undefined && this._previousFrame().isStrike()) {
      return true;
    } else {
      return false;
    }
  },

};
