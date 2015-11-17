function Game() {
	this.rollsArray = [];
	this.secondRoll = false;
	this.currentScore = [];
	this.halfStrike = false;
};

Game.prototype.rollBall = function(pinsDown) {
	if (pinsDown === 10) {
		this.rollsArray.push(pinsDown, 0);
	} else {
		this.rollsArray.push(pinsDown);
	}
	console.log(this.rollsArray);
	this.spare();
	console.log(this.spare());
	this.isSecondRoll();
	this.score();
	return pinsDown;
};

Game.prototype.isSecondRoll = function() {
	if (this.rollsArray.length % 2 === 0) {
		return this.secondRoll = true;
	} else {
		return this.secondRoll = false;
	}
};

Game.prototype.score = function() {
	
	if (this.secondRoll) {
		return this.currentScore.push(this.rollsArray.reduce(function(a,b){return a+b;}));
	} else {
		return this.currentScore;
	}
};

Game.prototype.spare = function() {
	if (this.rollsArray.length % 2 === 0 && this.rollsArray.slice(-2).reduce(function(a,b){return a+b;}) === 10) {
		return this.halfStrike = true;
	} else {
		return this.halfStrike = false;
	}
};