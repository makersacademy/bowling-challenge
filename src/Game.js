// "use strict";

function Game() {
	this.score = 0;
	this.frametally = 0;
	this.submittedframes = [];
	this.totalframes = [];
}

Game.prototype.calculateScore = function() {
	if (this.frametally == 10) {
		return "Game is now concluded. Your final score is: " + this.score;
	} else {
		return "Frame " + this.frametally + " of 10 complete. Your current score is " + this.score;
	}
};

Game.prototype.recordFrame = function(frame) {
	this.isBonus(frame);
	this.submittedframes.push(frame);
	this.score = this.frameSum(this.submittedframes);
	this.frametally++;
};

Game.prototype.onStrike = function() {
	return (this.submittedframes[this.submittedframes.length - 1]).isAstrike();
};

Game.prototype.onSpare = function() {
	return (this.submittedframes[this.submittedframes.length - 1]).isAspare();
};

Game.prototype.isBonus = function(frame) {
	if (this.frametally >= 1) {
		(this.submittedframes[this.submittedframes.length - 1]).recBonus(frame);
	}
};

Game.prototype.frameSum = function(submitted_frames) {
	this.submittedframes.forEach(function(item){this.score += item.isScore});
};
