function frame() {
  this._firstScore = null;
  this._secondScore = null;
  this._thirdScore = null;
}

BONUS_SCORE = 10;

// setters

frame.prototype.firstRollScore = function(firstScore) {
  this._firstScore = firstScore;
};

frame.prototype.secondRollScore = function(secondScore) {
  this._secondScore = secondScore;
};

frame.prototype.thirdRollScore = function(thirdScore) {
  this._thirdScore = thirdScore;
};

// getters

frame.prototype.firstScore = function() {
  return this._firstScore;
};

frame.prototype.secondScore = function() {
  return this._secondScore;
};

frame.prototype.thirdScore = function() {
  return this._thirdScore;
};

//

frame.prototype.isAStrike = function() {
  return (this.firstScore() === BONUS_SCORE);
};

frame.prototype.isASpare = function() {
  if(this.isAStrike()) return false;
  return (this.firstScore() + this._secondScore === BONUS_SCORE);
};

frame.prototype.preBonusScore = function() {
  return this._firstScore + this._secondScore + this._thirdScore;
};
