'use strict';

function Frame(number_of_rolls = 2) {
    this._number_of_rolls = number_of_rolls;
    this._scores = [];
    this._IsStrike = false;
    this._strikeBonusRollsScores = [];
}

Frame.prototype.roll = function(score) {
    if (this._scores.length == this._number_of_rolls) {
        throw new Error('No more rolls this frame.');
    }
    this._scores.push(score);
    if (score == 10) {
      this._number_of_rolls = 1;
      this._IsStrike = true;
    };
};

Frame.prototype.IsAStrike = function() {
  return this._IsStrike;
}

Frame.prototype.sumStrikeBonusRollsScores = function() {
  var accumulator = 0;
  var i;
  for (i = 0; i < this._strikeBonusRollsScores.length; i++) {
    accumulator + this._strikeBonusRollsScores[i]
  }
  return accumulator
}
