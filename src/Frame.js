"use strict";

function Frame() {
	this.score = 0;
	this.strike = false;
	this.spare = false;
}

Frame.prototype.isAstrike = function() {
	return this.strike;
};

Frame.prototype.isAspare = function() {
	return this.spare;
};
