function frame() {
  this._firstScore = null;
  this._secondScore = null;
  this._isAStrike = false;
  this._isASpare = false;
}

BONUS_SCORE = 10;

frame.prototype.firstRollScore = function(firstScore) {
  this._firstScore = firstScore;
  if(this._firstScore === BONUS_SCORE) {
    this._isAStrike = true;
  }
  // should write a predicate method for the above line at some point
  return this._firstScore;
};

frame.prototype.secondRollScore = function(secondScore) {
  if(this._isAStrike) return this._secondScore;
  // should write a predicate method for the below if statement at some point
  this._secondScore = secondScore;
  if(this._firstScore + this._secondScore === BONUS_SCORE) {
    this._isASpare = true;
  }
  return this._secondScore;
};

frame.prototype.totalScore = function() {
  return this._firstScore + this._secondScore;
};
