const Frame = require("./Frame.js");

function Scorecard() {
	this.frame = new Frame();
	this.score = [];
}

Scorecard.prototype.newFrame = function() {
	this.frame = new Frame();
};

Scorecard.prototype.isSpare = function() {
	if (this.frame.rolls[0] + this.frame.rolls[1] == 10) {
		return true;
	}
};

Scorecard.prototype.addToScorecard = function() {
	// calculate spare frame
	if (this.isSpare()) {
		this.score.push(
			this.frame.rolls[0] + this.frame.rolls[1] + this.frame.rolls[2]
		);
	} else {
		// Calculate normal frame
		this.score.push(this.frame.rolls[0] + this.frame.rolls[1]);
	}
};
module.exports = Scorecard;
