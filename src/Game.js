'use strict';

function Game() {
	this._scoreCard = []
	this._rollCounter = 0
};

Game.prototype.roll = function(pins){
	this._scoreCard.push(pins);
	this._rollCounter ++;
};

Game.prototype.score = function() {
	var totalScore = 0;
	var currentRoll = 0;
	var game = this;

	for(var frame = 0; frame < 10; frame++) {
		if (isStrike()) {
			strikeScore();
		} else if (isSpare()) {
			spareScore();
		} else {
			normalScore();
		};		
	};
	return totalScore;
	

	function isStrike() {
		return game._scoreCard[currentRoll] == 10
	}

	function isSpare() {
		return game._scoreCard[currentRoll] +  game._scoreCard[currentRoll + 1] == 10
	}

	function strikeScore() {
		totalScore += 10 + game._scoreCard[currentRoll + 1] + game._scoreCard[currentRoll + 2];
		currentRoll += 1
	}

	function spareScore() {
		totalScore += 10 + game._scoreCard[currentRoll + 2];
		currentRoll += 2;
	}

	function normalScore() {
		totalScore += game._scoreCard[currentRoll] + game._scoreCard[currentRoll + 1];
		currentRoll += 2;
	}
}

	