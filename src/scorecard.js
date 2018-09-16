"use strict";

function Scorecard() {
	this.frames = [];
}

Scorecard.prototype = {
	addFrame: function(frame) {
		this.frames.push(frame);
	},
	isFinalFrame: function() {
		return this.frames.length === 9;
	},
	finalScore: function() {
		return this.getCumulativeScore(10);
	},
	getBonusScore: function(i) {
		var bonus = 0;

		if (this.frames[i+1] !== void 0) {
			bonus = this.frames[i+1].rolls[1];
			if (this.frames[i].isStrike()) {
				if (this.frames[i+1].isStrike() && i != (this.frames.length - 2)) {
					bonus += this.frames[i+2].rolls[1];
				} else bonus += this.frames[i+1].rolls[2];
			}
			if (this.frames[i].rolls.length === 4) {
				bonus += this.frames[9].rolls[3];
			}
		}
		return bonus;
	},
	getCumulativeScore: function(frameNo) {
		var score = 0;

		for (var i = 0; i < frameNo; i ++) {
			score += this.frames[i].score;
			if (this.frames[i].score === 10 ) {
				score += this.getBonusScore(i);
			}
		}
		return score;
	}

};
