function ScoreCard() {
  this.frames = [];
  this.total = 0;
}

Game.prototype.getTotal = function() {
  return this.totalScore;
};

Game.prototype.getFrames = function() {
  return this.scoreCard;
};

Game.prototype.updateTotal = function(subtotal) {
  this.totalScore += subtotal;
};

Game.prototype.updateFrames = function(frame) {
  this.scoreCard.push(frame);
};
