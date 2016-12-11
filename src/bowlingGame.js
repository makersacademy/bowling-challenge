'use strict';

function BowlingGame(){
  this.score = 0;
  this.rollScore = 0;
  this._frame = 1;
};

BowlingGame.prototype.roll = function(number){
  this.rollScore += number;
  this._isStrike(number);
  return this.rollScore;
};

BowlingGame.prototype._isStrike = function(number){
  if(number === 10){
    this._frame += 1;
  };
};
