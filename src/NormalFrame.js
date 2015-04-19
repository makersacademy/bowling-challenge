var NormalFrame = function() {
	STARTING_PINS = 10;
	this.pinsStanding = STARTING_PINS;
	this.isOver = false;
	this.balls = [];
};

NormalFrame.prototype.Over = function() {
	this.isOver = true;
};

NormalFrame.prototype.bowl = function(ball) {
	this.balls.push(ball);
};