function Game() {
  this.scoreCard = [];
  this.score = 0;
}

var rollOne = 1;
var rollTwo = 9;
var frame = [rollOne, rollTwo];

Game.prototype.addFrame = function(frame) {
  return this.scoreCard.push(frame);
};

Game.prototype.currentScore = function() {
  for (var i = 0; i < this.scoreCard.length; i++) {
    this.score += this.scoreCard[i][0] + this.scoreCard[i][1];
  }
  return this.score;
}
