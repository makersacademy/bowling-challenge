var Game = function() {
  this.bowlingCard = new BowlingCard
  this.scoreCalculator = new ScoreCalculator
};
Game.prototype.roll = function(pins) {
  this.scoreCalculator.reset();
  this.bowlingCard.record(pins);
  this.scoreCalculator.calculateScore(this.getScoreCard());
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

Game.prototype.getScore = function() {
  return this.scoreCalculator.score;
};
Game.prototype.getFrameScores = function() {
  return this.scoreCalculator.frameScores;
};
Game.prototype.bonuses = function() {
  return this.scoreCalculator.bonusTurns;
};
Game.prototype.getframes = function() {
  return this.scoreCalculator.framePerTurn;
};
Game.prototype.getPins = function() {
  return this.scoreCalculator.pinsPerTurn;
};
Game.prototype.getRolls = function() {
  return this.scoreCalculator.rollPerTurn;
};
