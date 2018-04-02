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

Scorecard.prototype.isStrike = function() {
	if (this.frame.rolls[0] == 10) {
		return true;
	}
};

Scorecard.prototype.addToScorecard = function() {
	// calculate if strike
	if (this.isStrike()) {
		this.score.push(this.frame.rolls[0]);
	} else if (this.isSpare()) {
		// calculate spare frame
		this.score.push(
			this.frame.rolls[0] + this.frame.rolls[1] + this.frame.rolls[2]
		);
	} else {
		// Calculate normal frame
		this.score.push(this.frame.rolls[0] + this.frame.rolls[1]);
	}
};

Scorecard.prototype.isFrameOver = function() {
	if (this.frame.rollCount == 0) {
		// this.calculateScore();
		// this.newFrame();
		return true;
	}
	// then calculateScore and then new frame
};

module.exports = Scorecard;
