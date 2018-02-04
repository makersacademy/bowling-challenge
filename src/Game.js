"use strict";

function Game() {
	this.score = 0;
	this.frametally = 0;
	this.submittedframes = [];
}

Game.prototype.calculateScore = function() {
	return this.score;
};

Game.prototype.recordFrame = function(frame) {
	this.submittedframes.push(frame);
	this.frametally++;
	if (this.frametally == 10) {
		return "Game is now concluded. Your final score is: " + this.calculateScore();
	} else {
		return "Frame " + this.frametally + " of 10 complete. Your current score is " + this.calculateScore();
	}
};
