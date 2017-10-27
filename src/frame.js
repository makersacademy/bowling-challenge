function frame() {
  this._firstScore = 0;
  this._secondScore = 0;
}

frame.prototype.firstRollScore = function(firstScore) {
  this._firstScore = firstScore;
  return this._firstScore;
};

frame.prototype.secondRollScore = function(secondScore) {
  this._secondScore = secondScore;
  return this._secondScore;
};

// frame.prototype.rollScores = function()

frame.prototype.totalScore = function() {
  return this._firstScore + this._secondScore;
};
