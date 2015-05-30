function Game() {
	this.frame = 1;
	this.rollCount = 1;
	this.score = 0;
};

Game.prototype.roll = function(pinsDown) {
	if (pinsDown > 10) {
    throw "Invalid roll (over 10)";
  }

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
