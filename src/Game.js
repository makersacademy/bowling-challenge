'use strict';

function Game(){
	this._rolls = [];

}

Game.prototype = {
	roll: function(pins) {
		this._rolls.push(pins);
	},
	score: function(){
		var result = 0;
		var rollIndex = 0;
		var game = this;

		for(var frameIndex = 0; frameIndex < 10; frameIndex++){
			if (isStrike()) {
				result += getStrikeScore();
				rollIndex++;
			} else if (isSpare()) {
				result += getSpareScore();
				rollIndex += 2;
			} else {
				result += getNormalScore();
				rollIndex += 2;
			}
		}

		return result;

		function isSpare() {
			return game._rolls[rollIndex] + game._rolls[rollIndex + 1] === 10;
		}

		function isStrike() {
			return game._rolls[rollIndex] === 10;
		}

		function getSpareScore() {
			return game._rolls[rollIndex] + game._rolls[rollIndex + 1] + game._rolls[rollIndex + 2];
		}

		function getStrikeScore() {
			return game._rolls[rollIndex] + game._rolls[rollIndex + 1] + game._rolls[rollIndex + 2];
		}

		function getNormalScore() {
			return game._rolls[rollIndex] + game._rolls[rollIndex + 1];
		}

	}
};
