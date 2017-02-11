function Game() {
	this._frameIndex = 0
	this._frames = []
	this._build = this.assignFrames();
	this._score = 0
	this._strike = false;
	this._spare = false;
	this._tenthFrame = false;
};
Game.prototype.assignFrames = function() {
	for (var i = 0; i < 11; i++) {
		this._frames.push(new Frame());
	}
};
Game.prototype.frameIndex = function() {
	return this._frameIndex;
};
Game.prototype.play = function(knockedPins) {
	if (this._strike == true || this._spare == true) {
		this._score += knockedPins;
		this._spare = false;
	}
	if (knockedPins == 10) {
		this._frames[this.frameIndex()]._firstRollPins += knockedPins;
		this._frameIndex += 1;
		this._score += knockedPins;
		this._strike = true;
	} else {
		this._frames[this.frameIndex()]._firstRollPins = 0;
		this._frames[this.frameIndex()]._firstRollPins += knockedPins;
		this._score += knockedPins
	};
};
Game.prototype.secondPlay = function(knockedPins) {
	this._frames[this.frameIndex()]._secondRollPins += knockedPins
	this._score += knockedPins;

	if (knockedPins + this.returnFirstRollPins() == 10) {
		this._spare = true;
	}

	if (this._strike == true) {
		this._score += knockedPins
		this._strike = false;
	}
};

Game.prototype.bonusPlay = function(knockedPins) {
	if (knockedPins ==10){ this._score += knockedPins};
	this._score += knockedPins;
};
Game.prototype.returnFirstRollPins = function() {
	return this._frames[this.frameIndex()]._firstRollPins;
}
Game.prototype.returnSecondRollPins = function() {
	return this._frames[this.frameIndex()]._secondRollPins;
}
Game.prototype.nextFrame = function() {
	this._frameIndex += 1
}
Game.prototype.score = function() {
	return this._score
}
Game.prototype.hasBonusPlay = function() {
	if (this._strike == true || this._spare == true) {
		return true;
	}
}

Game.prototype.hasPerfectGame = function() {
	if (this._score == 210) {
		this.perfectGame();
	}
}
Game.prototype.perfectGame = function() {
	this._score = 300;
}