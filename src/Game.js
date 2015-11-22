function Game() {
	this.score = [];
}

Game.prototype.currentScore = function() {
	return this.score.reduce((a + b) => a + b)
};

Game.prototype.bowl = function(inputScore) {
  this.score.push(inputScore)
  return this.currentScore;
};
