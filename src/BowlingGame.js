'use strict';

function BowlingGame(){
  this._rolls = []
};

BowlingGame.prototype.roll = function(pinsDown) {
  this._rolls.push(pinsDown);
};

BowlingGame.prototype.score = function () {
  var score = 0;
  var i = 0;
  for (var frame = 0; frame < 10; frame++){
    if(this.isSpare(i)){
      score += 10 + this._rolls[i+2];
      i+=2;
    } else {
      score += this._rolls[i] + this._rolls[i+1];
      i+=2;
    }
  }
    return score;
};

BowlingGame.prototype.isSpare = function (i){
  return this._rolls + this._rolls[i+1] === 10;
};
