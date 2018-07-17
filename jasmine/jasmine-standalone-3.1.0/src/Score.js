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

  if (this._rollScore[index - '6'] === 10) {
    if (this._rollScore[index - '4'] === 10) {
      this.addBonus(index);
    }
  }
  else if (this._rollScore[index - '4'] === 10) {
    this.addBonus(index);
  } else if (this._rollScore[index - '4'] + this._rollScore[index - '3'] === 10) {
    this.addBonus(index);
  };
};

Score.prototype.addBonus = function(index) {
  var bonus = 0;

  if (this._rollScore[index - '6'] === 10) {
    if (this._rollScore[index - '4'] === 10) {
     bonus =
     this._rollScore[index-'2']
     // + this._rollScore[index-'1'];
     this._totalScore.push(bonus);
     this._bonus.push(bonus);
    }
  }

  if (this._rollScore[index - '4'] === 10) {
    if (this._rollScore[index - '2'] === 10) {
    bonus = 10;
    } else {
      bonus = 0;
      bonus =
      this._rollScore[index-'2']
       + this._rollScore[index-'1'];
    };
  } else {
    // if only 1x 10
    bonus = 0;
    bonus = this._rollScore[index-'2'];
  };

  // Frame 10 logic
  if (this._rollScore[index - '1'] === 10) {
    if (this._rollScore[index - '2'] === 10) {
      if (this._rollScore[index - '3'] === 10) {
       bonus =5
       // this._rollScore[index-'2']
       // + this._rollScore[index-'1'];
       this._totalScore.push(bonus);
       this._bonus.push(bonus);
     }
    }
  }

  this._totalScore.push(bonus);
  this._bonus.push(bonus);
  return bonus;
};

Score.prototype.getBonus = function() {
  return this._bonus;
};

Score.prototype.resetScore = function() {
  this._totalScore = [];
  this._rollScore = [];
};
