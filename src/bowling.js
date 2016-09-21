
var Bowling = function Bowling(){"use strict";
  this._frame = 1;
  this._roll = 1;
  this._rollScore1 = 0;
  this._rollScore2 = 0;
  this._totalScore = 0;
  this._currentKnockdown = 0;
  this._standingPins = 10;
  this._sX = "";
  this._maxRounds = 10;
};

Bowling.prototype = {
  bowl: function () {
    this.rollScoreRecord();
    this.frameAndRoll();
  },
};

// ------------------------------------

Bowling.prototype.rollScoreRecord = function(){
  this._currentKnockdown = this.pinsKnockdown();
  if(this._roll === 1){
    this._rollScore1 = this._currentKnockdown
  } else {
    this._rollScore2 = this._currentKnockdown
  }
  this.remainingPins();
}

Bowling.prototype.pinsKnockdown = function(){
  return Math.floor(Math.random() * (this._standingPins + 1));
}

Bowling.prototype.remainingPins = function(){
  this._standingPins -= this._currentKnockdown
}

// ------------------------------------

Bowling.prototype.frameAndRoll = function(){
  this.endGameCheck();
  if(this._frame < this._maxRounds) {
    this.frameIncrement();
    this.rollAlternate();
  }
}

Bowling.prototype.endGameCheck = function(){
  if(this._frame === 10 && this._standingPins === 0){
    this._maxRounds = 11
  }
}

// ------------------------------------

Bowling.prototype.frameIncrement = function(){
  if(this._roll === 2 || this._standingPins === 0){
    this._frame ++
    this.totalScoreUpdate();
  }
}

Bowling.prototype.totalScoreUpdate = function(){
  this._totalScore += (this._rollScore1 + this._rollScore2);
  this.checkBonus();
  this.strikeOrSpare();
}

Bowling.prototype.checkBonus = function(){
  if (this._sX === "Strike!") {
    this._totalScore += (this._rollScore1 + this._rollScore2);
  } else if (this._sX === "Spare!") {
    this._totalScore += this._rollScore1;
  }
  this._sX = "";
}

Bowling.prototype.strikeOrSpare = function(){
  if (this._rollScore1 === 10) {
    this._sX = "Strike!"
  } else if (this._rollScore1 + this._rollScore2 === 10) {
    this._sX = "Spare!"
  }
}

// ------------------------------------

Bowling.prototype.rollAlternate = function(){
  if(this._roll === 1 && this._standingPins > 0){
    this._roll = 2;
  } else {
    this._roll = 1;
    this.frameReset();
  }
}

Bowling.prototype.frameReset = function(){
  this._rollScore1 = 0;
  this._rollScore2 = 0;
  this._currentKnockdown = 0;
  this._standingPins = 10;
  this._maxRounds = 10;
}
