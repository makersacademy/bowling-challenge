'use strict';

function Frame(rolls) {
  this.rolls = rolls;
}

Frame.prototype.total = function() {
  return this._rollScore();
};

Frame.prototype._rollScore = function() {
  return this.rolls.reduce(function(score, roll) {
    return score + roll;
  });
};
