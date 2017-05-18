
function Game() {"use strict";
  this._frame = 1;
  this._roll = 1;
  this._rollScore1 = 0;
  this._rollScore2 = 0;
  this._totalScore = 0;
  this._currentKnockdown = 0;
  this._maxRounds = 10;
};

Game.prototype.bowl = function() {
  this.rollScoreMethod();
};

Game.prototype.rollScoreMethod = function(){
  this._currentKnockdown = this.pinsKnockdown();
  if(this._roll === 1){
    this._rollScore1 = this._currentKnockdown
  } else {
    this._rollScore2 = this._currentKnockdown
  }
  this.remainingPins();
}

Game.prototype.pinsKnockdown = function(){
  return Math.floor(Math.random() * (this._standingPins + 1));
}

Game.prototype.remainingPins = function(){
  this._standingPins -= this._currentKnockdown
}




Game.prototype.frameAndRoll = function(){
  this.endGameCheck();
  if(this._frame < this._maxRounds) {
    this.frameIncrement();
    this.rollAlternate();
  }
}

Game.prototype.endGameCheck = function(){
  if(this._frame === 10 && this._standingPins === 0){
    this._maxRounds = 11
  }
}
