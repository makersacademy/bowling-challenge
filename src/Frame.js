'use strict';

function Frame(number_of_rolls = 2) {
    this._number_of_rolls = number_of_rolls;
    this._scores = [];
    this.IsStrike = false;
}

Frame.prototype.roll = function(score) {
    if (this._scores.length == this._number_of_rolls) {
        throw new Error('No more rolls this frame.');
    }
    this._scores.push(score);
    if (score == 10) {
      this._number_of_rolls = 1;
      this.IsStrike = true;
    };
};

Frame.prototype.IsAStrike = function() {
  return this.IsStrike;
}
