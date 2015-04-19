var Ball = function() {
	this.score = 0;
	this.isRolled = false;
	this.isStrike = false;
	this.isSpare = false;
	STRIKE = 10;
};

Ball.prototype.setScore = function(score) {
	this.score = score;
	this.isRolled = true;
	if (score === STRIKE) {this.isStrike = true;}
};

Ball.prototype.spare = function() {
	this.isSpare = true;
};
