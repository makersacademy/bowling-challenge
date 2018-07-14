'use strict';

function CalculateScore() {
  // this array logs the score after each frame
  this._totalScore = [];

  // this array logs the score after each roll
  this._rollScore = [];
}

CalculateScore.prototype.storeRollScore = function(kockedDownPins) {
  this._rollScore.push(kockedDownPins);
};

CalculateScore.prototype.calculateScore = function(kockedDownPins) {
   this._totalScore.push(kockedDownPins);
};

CalculateScore.prototype.getScore = function() {
  var sum = 0;
  for (var i = this._totalScore.length; !!i--;) {
  sum += this._totalScore[i];
  }
  return sum;
};

CalculateScore.prototype.bonus = function(index) {
  // return this.rollScore[(index-3)]  ;
  var bonus = 0;
  var tempScore = this._rollScore;
  if (this._rollScore[index - '4'] === 10) {
    if (this._rollScore[index - '3'] === 10) {
      bonus = 20;
    } else {
      bonus =
      this._rollScore[index-'2'] +
      this._rollScore[index-'1'];
    };
  } else {
    bonus = this._rollScore[index-'2'];
  };
  this._totalScore.push(bonus);
  return bonus;
};
