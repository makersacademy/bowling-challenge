function frame() {
  this._firstScore = null;
  this._secondScore = null;
}

BONUS_SCORE = 10;

frame.prototype.firstRollScore = function(firstScore) {
  this._firstScore = firstScore;
  return this._firstScore;
};

frame.prototype.secondRollScore = function(secondScore) {
  if(this.rollIsAStrike()) return this._secondScore;
  this._secondScore = secondScore;
  return this._secondScore;
};

frame.prototype.totalScore = function(nextFrameFirstScore, nextFrameSecondScore) {
  if(this.rollIsAStrike()) {
    return this._firstScore + this._secondScore + nextFrameFirstScore + nextFrameSecondScore;
  }
  else if(this.rollIsASpare()) {
    return this._firstScore + this._secondScore + nextFrameFirstScore;
  }
  return this._firstScore + this._secondScore;
};

// predicate methods; would make them private in Ruby. Anything analogous here?

frame.prototype.rollIsAStrike = function() {
  return (this._firstScore === BONUS_SCORE);
};

frame.prototype.rollIsASpare = function() {
  if(this.rollIsAStrike()) {
    return false;
  }
  else {
    return (this._firstScore + this._secondScore === BONUS_SCORE);
  }
};
