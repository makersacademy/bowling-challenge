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

  _updateScore: function() {
    if (this._currentFrame().isComplete() === true) {
      this._score += (this._currentFrame().score());
      this.frameNumber += 1;
    }
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

};
