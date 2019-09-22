'use strict';

function BowlingGame(){
  this._rolls = []
};

BowlingGame.prototype.roll = function(rolls) {
  this._rolls = rolls;
};

BowlingGame.prototype.score = function () {
  var score = 0;
  var i = 0;
  for (var frame = 0; frame < 10; frame++){
    if (this.isStrike(i)) {
      score += 10 + this._rolls[i+1] + this._rolls[i+2];
      i += 1;
    } else if (this.isSpare(i)) {
      score += 10 + this._rolls[i+2];
      i+=2;
    } else {
      score += this._rolls[i] + this._rolls[i+1];
      i+=2;
    }
  }
  return score;
};

BowlingGame.prototype.isStrike = function (i){
  return this._rolls[i] === 10
};

BowlingGame.prototype.isSpare = function (i){
  return this._rolls[i]+ this._rolls[i+1] === 10
};
