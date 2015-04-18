var Ball = function() {
	this.score = 0;
	this.isRolled = false;
	this.isStrike = false;
};

Ball.prototype.setScore = function(score) {
	this.score = score;
	this.isRolled = true;
	if (score === 10) {this.isStrike = true;}
};
