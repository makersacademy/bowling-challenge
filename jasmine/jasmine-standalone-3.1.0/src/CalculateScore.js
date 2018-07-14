'use strict';

function CalculateScore() {
  // this array logs the score after each frame
  this.totalScore = [];

  // this array logs the score after each roll
  this.rollScore = [];
}

CalculateScore.prototype.logRollScore = function(kockedDownPins) {
  this.rollScore.push(kockedDownPins);
};

CalculateScore.prototype.calculateScore = function(kockedDownPins) {
   this.totalScore.push(kockedDownPins);
};

CalculateScore.prototype.getScore = function() {
  var sum = 0;
  for (var i = this.totalScore.length; !!i--;) {
  sum += this.totalScore[i];
  }
  return sum;
};

CalculateScore.prototype.strikeBonus = function(index) {
  // return this.rollScore[(index-3)]  ;
  var bonus = 0;
  var tempScore = this.rollScore;
  if (this.rollScore[index - '4'] === 10) {
    if (this.rollScore[index - '3'] === 10) {
      bonus = 20;
    } else {
      bonus =
      this.rollScore[index-'2'] +
      this.rollScore[index-'1'];
    };
  } else {
    bonus = this.rollScore[index-'2'];
  };
  this.totalScore.push(bonus);
  return bonus;

};

// CalculateScore.prototype.strikeBonus2 = function(index) {
//   var bonus = 0;
//   // var tempScore = this.rollScore;
//   if (this.isAStrike(index-2)) {
//     bonus = isAStrike(index-3) ? 20 : 10 + this.rollScore[index-2];
//   }
//   this.totalScore.push(bonus);
//   return bonus;
// };
//
// CalculateScore.prototype.isAStrike(index){
//   return this.rollScore[index-2] === '10';
// };
