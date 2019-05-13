var Scorecard = function() {
  this._total = 0;
  this._rolls = 0;
};

Scorecard.prototype.score = function(game) {
  var initialValue = 0;
  this._total = game.frames().reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.score();
  },initialValue)
  return this._total;
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
