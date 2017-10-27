function frame() {
  this._firstScore = null;
  this._secondScore = null;
}

frame.prototype.firstRollScore = function(firstScore) {
  this._firstScore = firstScore;
  return this._firstScore;
};

frame.prototype.secondRollScore = function(secondScore) {
  if(this._firstScore === 10) {
    return this._secondScore;
  }
  this._secondScore = secondScore;
  return this._secondScore;
};

frame.prototype.totalScore = function() {
  return this._firstScore + this._secondScore;
};
