"use strict";
function Game () {
	this.newGame();
}

Game.prototype.newGame = function() {
	this.gameOver = false;
	this.currentFrame = 1;
	this.currentRoll = 1;
	this.currentScore = 0;
	this.numBonus = 0;
	this.scoreHistory = [];
	this.frameHistory = [];
	this.bonusMessage = "";
};

Game.prototype.roll = function(numPins) {

	this.bonusMessage = "";
	if(this.gameOver == true) {
		this.newGame();
	}
	if(this.currentFrame > 9)
	{
		this.tenFrame(numPins);		
	}
	else {
		this.currentScore += numPins;
		this.frameHistory.push(numPins);
		this.bonusAdd(numPins);
		if(numPins == 10) {
			this.strike();
		}
		else {
			this.processRoll(numPins);
		}
	}
};

Game.prototype.newFrame = function() {

	if(this.currentFrame != 10) {
		this.currentFrame += 1;
		this.currentRoll = 1;
		this.scoreHistory.push(this.frameHistory);
		this.frameHistory = [];
	}
};

Game.prototype.add = function(a, b) {
	return a + b;
};

Game.prototype.processRoll = function() {

	switch(this.currentRoll) {
	case 1:
		this.currentRoll += 1;
		break;
	case 2:
		if(this.frameHistory.reduce(this.add, 0) == 10) {
			this.numBonus += 1;
		}
		this.newFrame();
		break;
	}
};

Game.prototype.bonusAdd = function(numPins) {

	if(this.numBonus == 0) {
		return;
	}
	if(this.numBonus > 2) {
		numPins += numPins;
		this.numBonus -= 1; //adds score to 2 rounds
	}
	this.currentScore += numPins;
	this.bonusMessage = numPins + " bonus points added";
	this.numBonus -= 1;
};

Game.prototype.strike = function() {
	this.numBonus += 2;
	this.frameHistory.push(10);
	this.newFrame();
};

Game.prototype.tenFrame = function(numPins) {
	this.currentScore += numPins;
	this.frameHistory.push(numPins);
	if(numPins == 10 && this.currentScore >= 250) {
		this.currentScore += numPins; // due to strike bonus bug fixes perfect game
	}
	if(this.currentRoll == 2) {
		if(this.frameHistory.reduce(this.add, 0) < 9) {
			this.gameOver = true;
		} 
	}
	else if(this.currentRoll == 3) {
		this.gameOver = true;
	}
	this.currentRoll += 1;
};
