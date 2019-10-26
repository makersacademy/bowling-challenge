var Game = function() {
  this.bowlingCard = new BowlingCard
};

Game.prototype.roll = function(pins) {
  this.bowlingCard.roll(pins)
};

Game.prototype.getScoreCard = function() {
  return this.bowlingCard.scoreCard;
};

Game.prototype.getCurrentFrame = function() {
  return this.bowlingCard.frameNumber
};

Game.prototype.getCurrentRoll = function() {
  return this.bowlingCard.rollNumber
};





// Game.prototype.calculateBonus = function(pins) {
//   var roll1 = this.scoreCard[this.scoreCard.length - 2].pins
//   var roll2 = this.scoreCard[this.scoreCard.length - 1].pins
//   if (roll1 + roll2 === 10 ){
//     var multiplier = 2;
//     this.score += pins * multiplier;
//   } else {
//       this.score += pins;
//   }
// };
