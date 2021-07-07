"use strict";

function Frame() {
	this.score = 0;
	this.strike = false;
	this.spare = false;
	this.roll = 0;
}

Frame.prototype.isAstrike = function() {
	return this.strike;
};

Frame.prototype.isAspare = function() {
	return this.spare;
};

Frame.prototype.isScore = function() {
	return this.score;
};

Frame.prototype.isRoll = function() {
	return this.roll;
};

Frame.prototype.recordRoll = function(pin) {
	if (this.roll == 0 && pin == 10) {
		this.strike = true;
		return "Congratulations, you have a strike!";
	} else if (this.roll == 1 && (this.score + pin) == 10) {
		this.spare = true;
		return "Congratulations, you have a spare.";
	}
	this.roll++;
	this.score += pin;
};

Frame.prototype.recBonus = function(next_frame) {
	if (this.strike == true && this.roll == 1) {
		return this.score += next_frame.score;
	} else if (this.spare == true && this.roll == 0) {
		return this.score += next_frame.score;
	}
};
