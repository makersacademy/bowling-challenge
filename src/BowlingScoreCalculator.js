'use strict'

function BowlingScoreCalculator() {
	this.score = 0;
}

BowlingScoreCalculator.prototype.calculateFrame = function(x,y) {
	var frameScore = x + y;
	this.score += frameScore;
}