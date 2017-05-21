'use strict';

function Frame() {
    this.score = [];
    this.frameTotal = 0;
    this.strike = false;
    this.spare = false;
}

Frame.prototype.getScore = function() {
	return this.score;
};

Frame.prototype.updateScore = function(rollScore) {
	this.score.push(rollScore);
};

Frame.prototype.isStrike = function() {
	if (this.getScore[0] === 10) {
		this.updateStrike();
	}
};

Frame.prototype.updateStrike = function() {
	this.strike = true;
};

Frame.prototype.getStrike = function() {
	return this.strike;
};

Frame.prototype.isSpare = function() {
	if (this.getScore().reduce( function(a, b) { return a + b; }) === 10 
		&& this.getScore[0] !== 10) {
		this.spare = true;
	}
};

Frame.prototype.updateSpare = function() {
	this.spare = true;
};

Frame.prototype.getSpare = function() {
	return this.spare;
};

Frame.prototype.remainder = function() {
    if (this.score.length > 0) {
    	return 10 - this.score[0];
    }
    return 10;
};

Frame.prototype.roll = function() {
	if (this.getScore().length <= 1 && this.remainder() > 0) {	
		var roll = new Roll();
		this.updateScore(roll.score(this.remainder()));
		this.updateFrame();
	}
};

Frame.prototype.updateFrame = function() {
	this.isStrike();
	this.isSpare();
};
