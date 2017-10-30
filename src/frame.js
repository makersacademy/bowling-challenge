function frame() {
  this._firstScore = null;
  this._secondScore = null;
  this._thirdScore = null;
  // this._fourthScore = null;
}

BONUS_SCORE = 10;

frame.prototype.firstRollScore = function(firstScore) {
  this._firstScore = firstScore;
  return this._firstScore;
};

frame.prototype.secondRollScore = function(secondScore) {
  if(this.isAStrike()) return this._secondScore;
  this._secondScore = secondScore;
  return this._secondScore;
};

frame.prototype.thirdRollScore = function(thirdScore) {
  this._thirdScore = thirdScore;
  return this._thirdScore;
};

// frame.prototype.fourthRollScore = function(fourthScore) {
//   this._fourthScore = fourthScore;
//   return this._fourthScore;
// };


frame.prototype.isAStrike = function() {
  return (this._firstScore === BONUS_SCORE);
};

frame.prototype.isASpare = function() {
  if(this.isAStrike()) return false;
  return (this._firstScore + this._secondScore === BONUS_SCORE);
};

frame.prototype.preBonusScore = function() {
  return this._firstScore + this._secondScore + this._thirdScore;
};

// frame.prototype.totalScore = function() {
//   if(this.isRollAStrike()) {
//     return this.strikeDefaultScore();
//   }
//   else if(this.isRollASpare()) {
//     return this.spareDefaultScore();
//   }
//   return this._firstScore + this._secondScore;
// };
//
// frame.prototype.strikeDefaultScore = function() {
//   return (this._firstScore + this._secondScore + this._nextFrameFirstScore + this._nextFrameSecondScore);
// };
//
// frame.prototype.spareDefaultScore = function() {
//   return (this._firstScore + this._secondScore + this._nextFrameFirstScore);
// };

// predicate methods; would make them private in Ruby. Anything analogous here?
