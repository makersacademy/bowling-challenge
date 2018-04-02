const Frame = require("./Frame.js");

function Scorecard() {
	this.frame = new Frame();
	this.score = [];
}

Scorecard.prototype.newFrame = function() {
	this.frame = new Frame();
};

Scorecard.prototype.isSpare = function(arrayIndex) {
	if (this.frame.rolls[0] + this.frame.rolls[1] == 10) {
		return true;
	}
};

Scorecard.prototype.isStrike = function(arrayIndex) {
	if (this.frame.rolls[arrayIndex] == 10) {
		return true;
	}
};

Scorecard.prototype.addToScorecard = function() {
	// calculate if strike

	for (var i = 0; i < this.frame.rolls.length; i++) {
		if (this.isStrike(i)) {
			this.score.push(this.frame.rolls[i]);
		} else if (this.isSpare()) {
			// calculate spare frame
			this.score.push(
				this.frame.rolls[0] + this.frame.rolls[1] + this.frame.rolls[2]
			);
		} else {
			// Calculate normal frame
			this.score.push(this.frame.rolls[0] + this.frame.rolls[1]);
		}
	}
};

Scorecard.prototype.isFrameOver = function() {
	if (this.frame.rollCount == 0) {
		this.addToScorecard();
		this.newFrame();
		return true;
	} else {
		return false;
	}
	// then calculateScore and then new frame
};

Scorecard.prototype.logRoll = function(downedPins) {
	// if (this.isFrameOver()) {
	// 	this.newFrame();
	// } else if (downedPins == 10 && this.frame.pins == 10) {
	// 	// if strike
	// 	this.logRoll(downedPins);
	//
	// 	// pincount reset for next round
	// 	this.frame.downedPins += 10;
	//
	// 	// rollcount +2 (until score calc)
	// 	this.frame.rollCount += 2;
	// }
	// // else if (downedPins < 10 && downedPins == this.frame.pins) {
	// // }
	// this.frame.logRoll(downedPins);
	// this.frame.rollCount -= 1;
	if (downedPins == 10) {
		this.frame.rollCount += 2;
		this.frame.logRoll(downedPins);
	} else {
		this.frame.logRoll(downedPins);
	}
};

module.exports = Scorecard;
