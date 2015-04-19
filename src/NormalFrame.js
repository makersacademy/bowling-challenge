var NormalFrame = function() {
	this.pinsStanding = 10;
	this.isOver = false;
};

NormalFrame.prototype.Over = function() {
	this.isOver = true;
};