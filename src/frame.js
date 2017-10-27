function frame(nextFrameFirstScore, nextFrameSecondScore) {
  this._firstScore = null;
  this._secondScore = null;
  this._nextFrameFirstScore = nextFrameFirstScore;
  this._nextFrameSecondScore = nextFrameSecondScore;
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

frame.prototype.totalScore = function() {
  if(this.rollIsAStrike()) {
    return this.strikeDefaultScore();
  }
  else if(this.rollIsASpare()) {
    return this.spareDefaultScore();
  }
  return this._firstScore + this._secondScore;
};

// predicate methods; would make them private in Ruby. Anything analogous here?

frame.prototype.rollIsAStrike = function() {
  return (this._firstScore === BONUS_SCORE);
};

frame.prototype.rollIsASpare = function() {
  if(this.rollIsAStrike()) return false;
  return (this._firstScore + this._secondScore === BONUS_SCORE);
};

frame.prototype.strikeDefaultScore = function() {
  return (this._firstScore + this._secondScore + this._nextFrameFirstScore + this._nextFrameSecondScore);
};

frame.prototype.spareDefaultScore = function() {
  return (this._firstScore + this._secondScore + this._nextFrameFirstScore);
};
