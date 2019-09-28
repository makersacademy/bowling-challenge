function Scorecard (score = 0) {
  this.playerScore = score
};

Scorecard.prototype.addOne = function () {
  this.playerScore += 1 
}
