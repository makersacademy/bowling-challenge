'use strict'

var BowlingGame = function() {
	this.rolls = [];
	this.currentRoll = 0;
};

BowlingGame.prototype.roll = function(pins) {
	this.rolls[this.currentRoll++] = pins;
};

BowlingGame.prototype.score = function() {
	var score = 0;
	var rollIndex = 0;
	var self = this;

	function sumOfBallsInFrame() {
		return self.rolls[rollIndex] + self.rolls[rollIndex + 1];
	}

	function spareBonus() {
		return self.rolls[rollIndex + 2];
	}

	function strikeBonus() {
		return self.rolls[rollIndex + 1] + self.rolls[rollIndex + 2];
	}

	function isStrike() {
		return self.rolls[rollIndex] === 10;
	}

	function isSpare() {
		return self.rolls[rollIndex] + self.rolls[rollIndex + 1] === 10;
	}

	for (var frame = 0; frame < 10; frame++) {
		if (isStrike()) {
			score += 10 + strikeBonus();
			rollIndex++;
		} else if (isSpare()) {
			score += 10 + spareBonus();
			rollIndex += 2;
		} else {
			score += sumOfBallsInFrame();
			rollIndex += 2;
		}
	}
	return score;
};