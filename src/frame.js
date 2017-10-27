function frame() {
  this._firstScore = null;
  this._secondScore = null;
  this._isAStrike = false;
  this._isASpare = false;
}

frame.prototype.firstRollScore = function(firstScore) {
  this._firstScore = firstScore;
  if(this._firstScore === 10) {
    this._isAStrike = true;
  }
  return this._firstScore;
};

frame.prototype.secondRollScore = function(secondScore) {
  if(this._firstScore === 10) return this._secondScore;
  // should write a predicate method for the above line at some point
  this._secondScore = secondScore;
  if(this._firstScore + this._secondScore === 10) {
    this._isASpare = true;
  }
  return this._secondScore;
};

frame.prototype.totalScore = function() {
  return this._firstScore + this._secondScore;
};
