var Scorecard = function() {
  this._total = 0;
  this._rolls = 0;
};

Scorecard.prototype.record = function(pins) {
  this._rolls++;
  this._total += pins;
};

Scorecard.prototype.total = function() {
  return this._total;
};

Scorecard.prototype.isComplete = function() {
  if (this._rolls === 20) {
    return true
  } else {
    return false
  };
};

module.exports = Scorecard;
