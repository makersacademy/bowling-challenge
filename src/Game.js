"use strict";

function Game() {
	this.score = 0;
	this.frametally = 0;
	this.submittedframes = [];
}

Game.prototype.calculateScore = function() {
	if (this.frametally == 10) {
		return "Game is now concluded. Your final score is: " + this.score;
	} else {
		return "Frame " + this.frametally + " of 10 complete. Your current score is " + this.score;
	};
};

Game.prototype.recordFrame = function(frame) {
	this.submittedframes.push(frame) && this.frametally++;
	return this.calculateScore();
};

Game.prototype.onStrike = function() {
	return (this.submittedframes[this.submittedframes.length - 1]).isAstrike();
};
