'use strict'

function Frame(rolls) {
	this.rolls = rolls;
	this.MAXIMUM_ROLL = 10;
};

Frame.prototype.total = function(framePlusOne, framePlusTwo) {
	return this.rollTotal() + this.bonusTotal(framePlusOne, framePlusTwo);
};

Frame.prototype.rollTotal = function() {
	return this.rolls.reduce(function(x, y) {
		return x + y;
	});
};

Frame.prototype.bonusTotal = function(framePlusOne, framePlusTwo) {
	if (framePlusOne == undefined) {
		return 0;
	} else if (this.isStrike()) {
		return this.strikeBonus(framePlusOne, framePlusTwo);
	} else if (this.isSpare()) {
		return this.spareBonus(framePlusOne);
	}
};

Frame.prototype.isSpare = function() {
	return this.rollTotal() == this.MAXIMUM_ROLL;
};

Frame.prototype.spareBonus = function(framePlusOne) {
	return framePlusOne.rolls[0];
};

Frame.prototype.isStrike = function() {
	return this.rolls[0] == this.MAXIMUM_ROLL;
};

Frame.prototype.strikeBonus = function(framePlusOne, framePlusTwo) {
	if (framePlusOne.isStrike() && framePlusTwo !== undefined) {
		return framePlusOne.rollTotal() + framePlusTwo.rolls[0];
	} else {
		return framePlusOne.rolls[0] + framePlusOne.rolls[1];
	}
};