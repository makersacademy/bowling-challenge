var ScoreCard = function() {
  this.totalScore = 0
  this.frameScore = 0
}
ScoreCard.prototype.totalScore = function() {
  return this.totalScore
};

ScoreCard.prototype.addPoints = function(number) {
  return this.totalScore = this.totalScore + number
};

ScoreCard.prototype.resetPoints = function() {
  return this.totalScore = 0
};

ScoreCard.prototype.frameScore = function() {
  return this.frameScore
};

ScoreCard.prototype.addFramePoints = function(number) {
  return this.frameScore = this.frameScore + number
};
