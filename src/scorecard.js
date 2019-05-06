function ScoreCard() {
  this.rolls = [];
} ;

ScoreCard.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

ScoreCard.prototype.score = function () {
  var totalScore = 0;
  for (var i = 0; i < 20; i++) {
    totalScore += this.rolls[i];
  }
  return totalScore;
};
