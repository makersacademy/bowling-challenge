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
	if (
		this.frame.rolls.length == 3 ||
		(this.frame.rollCount == 0 && this.frame.rolls.length == 2)
	) {
		this.addToScorecard();
		this.newFrame();
		return true;
	} else {
		return false;
	}
	// then calculateScore and then new frame
};

Scorecard.prototype.logRoll = function(downedPins) {
	if (!this.isFrameOver() && downedPins == 10) {
		// if strike
		this.frame.rollCount += 2;
		this.frame.logRoll(downedPins);
	} else if (
		!this.isFrameOver() &&
		downedPins < 10 &&
		downedPins == this.frame.pins
	) {
		// if spares
		this.frame.rollCount += 1;
		this.frame.logRoll(downedPins);
	} else if (!this.isFrameOver()) {
		// normal roll
		this.frame.logRoll(downedPins);
	} else {
		this.isFrameOver();
	}
};

Scorecard.prototype.finalScore = function() {
	var reducer = (accumulator, currentValue) => accumulator + currentValue;
	// return this.score.reduce(reducer);
	var frameScores = [];

	for (var i = 0, j = 0; i < 10; i++, j += 2) {
		if (this.score[i] == 10) {
			// loop for strike
			frameScores.push(this.score[i] + this.score[i + 1] + this.score[i + 2]);
			console.log(frameScores);
		} else if (frameScores[0] == undefined) {
			// loop for normal
			console.log("here");

			frameScores.push(this.score[j]);
			console.log(frameScores);
		} else {
			console.log("wrong hole", frameScores[i]);
			frameScores.push(frameScores[i - 1] + this.score[j]);
			console.log(frameScores);
		}
	}
	var finalScore = frameScores.reduce(reducer);
	return finalScore;
};

module.exports = Scorecard;
