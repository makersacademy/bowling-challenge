function Game() {
	this.currentScore = 0;
}

Game.prototype.score = function() {
	return this.currentScore;
};