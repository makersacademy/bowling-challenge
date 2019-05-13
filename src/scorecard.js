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

module.exports = Scorecard;
