'use strict';

function Frame() {
    this.score = [];
    this.frameTotal = 0;
    this.rollCount = 0;
}

Frame.prototype.score = function() {
	return this.score();
};

Frame.prototype.updateScore = function(rollScore) {
	this.score.push(rollScore);
};

Frame.prototype.logRoll = function() {
	this.rollCount += 1;
};

Frame.prototype.rollCount = function() {
	return this.rollCount();
};

Frame.prototype.calculateRemainder = function() {
    return 10 - this.score[0];
};

Frame.prototype.roll = function() {
	if ()
	var roll = new Roll();
	updateScore(roll.score(calculateRemainder()));
	logRoll();
};

