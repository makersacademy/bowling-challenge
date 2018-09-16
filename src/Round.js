// Change Frame to Frame
// player can still roll after scoring strike

function Frame() {
  this.bowls = []
  this.score = 0
  this.strike = false
  this.spare = false
};

Frame.prototype.bowl = function(pins) {
  if (!this.isEnd() && this._isValidBowl(pins)) {
    this.storeScore(pins)
    this.isEnd()
    this._spareOrStrike();
  };
};

Frame.prototype.storeScore = function(pins) {
  this.bowls.push(pins)
  this.score += pins
};

Frame.prototype._isStrike = function() {
  if (this.bowls[0] == 10) {
    this.strike = true
  };
}

Frame.prototype._isSpare = function() {
  if (this.bowls[1] > 0) {
    this.spare = true
  };
};

Frame.prototype._spareOrStrike = function() {
  if (this.score === 10) { 
    this._isSpare()
    this._isStrike()
  }
};

Frame.prototype.isEnd = function() {
  return (this.score === 10 || this.bowls.length === 2)
};

Frame.prototype._isValidBowl = function(pins) {
  return (this.score + pins) <= 10
};
