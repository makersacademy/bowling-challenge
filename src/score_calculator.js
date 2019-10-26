
var ScoreCalculator = function() {
  this.currentScore = 0
};

ScoreCalculator.prototype.calculate = function(scoreCard) {
  console.log(scoreCard);
  scoreCard.forEach(function(roll) {
  console.log(roll);
});
};



// ScoreCalculator.prototype.getScoreCard = function() {
//   return this.bowlingCard.scoreCard;
// };

// ScoreCalculator.prototype.calculateBonus = function(pins) {
//   var roll1 = this.scoreCard[this.scoreCard.length - 2].pins
//   var roll2 = this.scoreCard[this.scoreCard.length - 1].pins
//   if (roll1 + roll2 === 10 ){
//     var multiplier = 2;
//     this.score += pins * multiplier;
//   } else {
//       this.score += pins;
//   }
// };
