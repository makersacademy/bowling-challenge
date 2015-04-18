var Ball = function() {
	this.score = 0;
	this.isRolled = false;
};

Ball.prototype.setScore = function(score) {
	this.score = score;
};
