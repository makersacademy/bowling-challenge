function Scorecard() {
  this.score = 0;
  this.numberOfFrames = 10;
};

Scorecard.prototype.totalScore = function () {
  return this.score;
};

Scorecard.prototype.rollZero = function () {
  return this.score;
};

// Scorecard.prototype.isStrike = function () {
//   this.score += 20;
// };
