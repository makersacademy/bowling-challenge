'use strict';

function Score() {
  // this array logs the score after each frame
  this._totalScore = [];

  // this array logs the score after each roll
  this._rollScore = [];
  this._bonus = [];
}

Score.prototype.storeRollScore = function(kockedDownPins) {
  this._rollScore.push(kockedDownPins);
};

Score.prototype.calculateScore = function(kockedDownPins) {
   this._totalScore.push(kockedDownPins);
};

Score.prototype.getScore = function() {
  var counter = 0,
   sum = 0;

  for (counter = this._totalScore.length; counter--;) {
    sum += this._totalScore[counter];
  }
  return sum;
};

Score.prototype.getScoreScard = function() {
   return this._rollScore;
};

Score.prototype.checkBonus = function(index) {

  if (this.isSixthRollStrike(index)) {
    if (this.isFourthRollStrike(index)) {
      this.addBonus(index);
    }
  } else if (this.isFourthRollStrike(index)) {
    this.addBonus(index);
  } else if (this._rollScore[index - 4] +
    this._rollScore[index - 3] === 10) {
      this.addBonus(index);
  }
};

Score.prototype.addBonus = function(index) {
  var bonus = 0;

  // index -5 checks for roll 2 in a game
  if (this.isSixthRollStrike(index) ||
    this.isFifthRollSpare(index)) {
      if (this.isFourthRollStrike(index)) {
       bonus = this._rollScore[index - 2]
       // + this._rollScore[index-'1'];
       this._totalScore.push(bonus);
       this._bonus.push(bonus);
      }
  }

  // index -3 checks for roll 2 in a game
  if (this.isFourthRollStrike(index) ||
    this.isThirdRollSpare(index)) {
      if (this.isSecondRollStrike(index)) {
        bonus = 10;
      } else {
        bonus = this._rollScore[index - 2] + this._rollScore[index - 1];
      }
    } else {
      // if only 1x 10
      bonus = this._rollScore[index - 2];
  }

  // frame 10 logic
  if (this.isfirstRollStrike(index)) {
    if (this.isSecondRollStrike(index)) {
      if (this.isThirdRollStrike(index)) {
       bonus = 5;
       this._totalScore.push(bonus);
       this._bonus.push(bonus);
     }
    }
  }
  this._totalScore.push(bonus);
  this._bonus.push(bonus);
  return bonus;
};

Score.prototype.isSixthRollStrike = function(index) {
   return this._rollScore[index - 6] === 10;
};

Score.prototype.isFifthRollSpare = function(index) {
   return this._rollScore[index - 5] === 10;
};

Score.prototype.isFourthRollStrike = function(index) {
   return this._rollScore[index - 4] === 10;
};

Score.prototype.isThirdRollSpare = function(index) {
   return this._rollScore[index - 3] === 10;
};

Score.prototype.isThirdRollStrike = function(index) {
   return this._rollScore[index - 3] === 10;
};

Score.prototype.isSecondRollStrike = function(index) {
   return this._rollScore[index - 2] === 10;
};

Score.prototype.isfirstRollStrike = function(index) {
   return this._rollScore[index - 1] === 10;
};

Score.prototype.getBonus = function() {
  return this._bonus;
};

Score.prototype.resetScore = function() {
  this._totalScore = [];
  this._rollScore = [];
};
