var Game = function() {
  this.bowlingCard = new BowlingCard
  this.scoreCalculator = new ScoreCalculator
};

Game.prototype.roll = function(pins) {
  this.bowlingCard.record(pins);
  //console.log(this.getScoreCard());
  // this.scoreCalculator.calculateScore(this.getScoreCard());
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
