function Game() {
	this.rollsArray = [];
	this.secondRoll = false;
	this.currentScore = [];
	this.halfStrike = false;
	this.bonus = 0;
	this.strikeBonus = 0;
};

Game.prototype.rollBall = function(pinsDown) {
	if (pinsDown === 10) {
			this.rollsArray.push(pinsDown, 0);
	} else if (this.halfStrike) {
			//this.currentScore.splice(-1, 1, parseInt(this.currentScore.slice(-1), 10) + pinsDown);
			this.bonus += pinsDown;
			this.rollsArray.push(pinsDown);
	} else {
			this.rollsArray.push(pinsDown);
	}
	console.log(this.rollsArray);
	console.log(this.spare());
	console.log(this.currentScore);
	console.log(this.strikeBonus);

	this.spare();
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
		if (this.rollsArray.length >=4 && parseInt(this.rollsArray.slice(-4), 10) === 10) {
			this.strikeBonus = this.strikeBonus + parseInt(this.rollsArray.slice(-2), 10) + parseInt(this.rollsArray.slice(-1), 10);
			//this.currentScore.splice(-1, 1, parseInt(this.currentScore.slice(-1), 10) + this.strikeBonus);
		} 
		return this.currentScore.push(this.bonus + this.strikeBonus + this.rollsArray.reduce(function(a,b){return a+b;}));
	} else {
		return this.currentScore;
	}
};

Game.prototype.spare = function() {
	if (this.rollsArray.length % 2 === 0 && this.rollsArray.slice(-2).reduce(function(a,b){return a+b;}) === 10 && this.rollsArray.slice(-1) != 0) {
		return this.halfStrike = true;
	} else {
		return this.halfStrike = false;
	}
};