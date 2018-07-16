'use strict';

function Score() {
  // this array logs the score after each frame
  this._totalScore = [];

  // this array logs the score after each roll
  this._rollScore = [];
}

Score.prototype.storeRollScore = function(kockedDownPins) {
  this._rollScore.push(kockedDownPins);
};

Score.prototype.calculateScore = function(kockedDownPins) {
   this._totalScore.push(kockedDownPins);
};

Score.prototype.getScore = function() {
  var sum = 0;
  for (var i = this._totalScore.length; !!i--;) {
  sum += this._totalScore[i];
  }
  return sum;
};

Score.prototype.getScoreScard = function(kockedDownPins) {
   return this._rollScore;
};

Score.prototype.checkBonus = function(index) {
  if (this._rollScore[index - '4'] === 10) {
    this.addBonus(index);
  // } else if (this._rollScore[index - '4'] === 10 && this._rollScore[index - '2'] === 10) {
  //   this.addBonus(index);
  } else if (this._rollScore[index - '4'] + this._rollScore[index - '3'] === 10) {
    this.addBonus(index);
  };
};

// review logic for PERFECT GAME
Score.prototype.addBonus = function(index) {
  var bonus = 0;
  if (this._rollScore[index - '4'] === 10) {
    if (this._rollScore[index - '2'] === 10) {
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

Score.prototype.resetScore = function() {
  this._totalScore = [];
  this._rollScore = [];
};
