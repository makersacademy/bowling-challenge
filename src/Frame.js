'use strict'

function Frame(rolls) {
	this.rolls = rolls;
};

Frame.prototype.total = function() {
	return this.rolls.reduce(function(x, y) {
		return x + y;
	});
};