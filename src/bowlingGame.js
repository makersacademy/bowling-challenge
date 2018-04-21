'use strict';

function BowlingGame() {
  this.rolls = [];
  this.currentRoll = 0
};

BowlingGame.prototype.roll = function(pins) {
  this.rolls[this.currentRoll++] = pins;

};

BowlingGame.prototype.score = function() {
	var score = 0;

	return score;
};
