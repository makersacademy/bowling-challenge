'use strict';

function Frame() {
  this.firstBowl = null;
  this.secondBowl = null;
};

Frame.prototype.addBowl = function(score) {
  this._checkValid(score)
  if (this.firstBowl === null) {
    this.firstBowl = score;
  } else if (this.secondBowl === null) {
    this.secondBowl = score;
  };
};

Frame.prototype._checkValid = function(score) {
  var error = new Error('Unable to add bowl, not a valid value')
  if (score > 10 || score < 0) throw error;
  if (this.firstBowl != null && this.firstBowl + score > 10) throw error;
};
