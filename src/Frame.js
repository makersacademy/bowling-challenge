"use strict";

function Frame () {
	this.frameScore = 0;
	this.bonus = 0;
	this.rolls = [];
	this.firstRoll = 0;
	this.secondRoll = 0;
};

Frame.prototype.getFrameScore = function() {
	this.calculateFrameScore();
	return this.frameScore;
};

Frame.prototype.setFirstRoll = function(score) {
	this.firstRoll = score;
	this.rolls.push(this.firstRoll);
};

Frame.prototype.setSecondRoll = function(score) {
	this.secondRoll += score;
	this.rolls.push(this.secondRoll);
};

Frame.prototype.calculateFrameScore = function(score) {
	this.frameScore = this.rolls.reduce(function (a, b) { return a + b; }, 0);
};
