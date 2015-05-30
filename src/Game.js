function Game() {
	this.frame = 1;
	this.rollCount = 1;
	this.score = 0;
};

Game.prototype.roll = function(pinsDown) {
	if (this.frame > 10) {
		throw "Game Over";
	}
	this.score += pinsDown;
	if (this.rollCount == 1) {
		this.rollCount += 1;
	} else {
		this.frame += 1;
		this.rollCount = 1;
	};
};
