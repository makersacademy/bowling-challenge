"use strict";

function Frame () {
	this.frameScore = 0;
	this.bonus = 0;
	this.rolls = [];
	this.firstRoll = 0;
	this.secondRoll = 0;
	this.strike = false;
	this.spare = false;
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

Frame.prototype.addBonus = function(bonus) {
	this.rolls.push(bonus);
};

Frame.prototype.strikeScored = function() {
	this.checkStrike();
	return this.strike;
};

Frame.prototype.spareScored = function() {
	this.checkSpare();
	return this.spare;
};

Frame.prototype.checkStrike = function() {
	if (this.rolls[0] === 10) {
		this.strike = true;
		this.setSecondRoll(0);
	};
	if (this.rolls[1] === 10) {
		this.strike = true;
	};
};

Frame.prototype.checkSpare = function() {
	if (this.firstRoll + this.secondRoll === 10) {
		this.spare = true
	};
};
