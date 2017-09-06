function Bowling() {
  this._score = 0
  this._frame = 1
  this._lastRoll = 0
  this._beforeLastRoll = 0
}

Bowling.prototype = {
  play: function(roll) {
    this._score += roll
    this._frame += 0.5
    if (this._lastRoll + this._beforeLastRoll === 10) {
      this._score += roll
    }
    this._beforeLastRoll = this._lastRoll
    this._lastRoll = roll
  },

  runningTotal: function() {
    return this._score
  },

  currentFrame: function() {
    return this._frame
  }
};
