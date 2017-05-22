'use strict';

function Frame() {
    this.score = [];
}

Frame.prototype.roll = function() {
	if (this.rollCount() <= 1 && this.remainder() > 0) {	
		var roll = new Roll().score(this.remainder());
		this.updateScore(roll);
	} else if (this.rollCount() <= 1) {
		this.updateScore(0);
	}
	this.checkEnd();
};

Frame.prototype.rollCount = function() {
	return this.getScore().length;
};

Frame.prototype.checkEnd = function() {
	if (this.rollCount() === 2) {
		scoreCard.updateFrames(this.getScore());
	}
};

Frame.prototype.getScore = function() {
	return this.score;
};

Frame.prototype.updateScore = function(rollScore) {
	this.score.push(rollScore);
};

Frame.prototype.remainder = function() {
    if (this.rollCount() > 0) {
    	return 10 - this.score[0];
    }
    return 10;
};

