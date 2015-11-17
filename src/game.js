function Game() {
	this.rollsArray = [];
	this.secondRoll = false;
};

Game.prototype.rollBall = function(pinsDown) {
	if (pinsDown === 10) {
		this.rollsArray.push(pinsDown, 0);
	} else {
		this.rollsArray.push(pinsDown);
	}
	console.log(this.rollsArray);
	this.isSecondRoll();
	return pinsDown;
};

Game.prototype.isSecondRoll = function() {
	if (this.rollsArray.length % 2 === 0) {
		return this.secondRoll = true;
	} else {
		return this.secondRoll = false;
	}
};

