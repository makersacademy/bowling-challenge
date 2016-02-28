'use strict';

function BowlingGame() {
  this._rolls = [];
  this._currentFrame = 0;
}

BowlingGame.prototype.roll = function(pins) {
  this._rolls.push(pins)
};

BowlingGame.prototype.score = function() {
  var score = 0;

  for(var i = 0; i < this._rolls.length - 1; i++) {
    if(this._currentFrame === 9) {
      score += this._normalScoring(i) + this._tenthFrameBonus(i);
      i++;
    } else if(this._isStrike(i)) {
      score += this._strikeScoring(i);
    } else if(this._isSpare(i)) {
      score += this._spareScoring(i);
      i++;
    } else {
      score += this._normalScoring(i);
      i++;
    }
    this._currentFrame++;
  }
  return score;
};

BowlingGame.prototype._isSpare = function(roll) {
  return this._rolls[roll] + this._rolls[roll + 1] === 10;
};

BowlingGame.prototype._isStrike = function(roll) {
  return this._rolls[roll] === 10;
};

BowlingGame.prototype._strikeScoring = function(roll) {
  return 10 + this._rolls[roll + 1] + this._rolls[roll + 2];
};

BowlingGame.prototype._spareScoring = function(roll) {
  return 10 + this._rolls[roll + 2];
};

BowlingGame.prototype._normalScoring = function(roll) {
  return this._rolls[roll] + this._rolls[roll + 1];
};

BowlingGame.prototype._tenthFrameBonus = function(roll) {
  return this._rolls[roll + 2] || 0;
};