"use strict";

function Bowling(frames) {
	this.numFrames = frames;  
	this.currentFrame = 0;
	this.secondScore = 0;
	this.score = 0;
	this.round = 0;
	this.scoreCard = {};
	this.totalScore = 0;
	this.string = "";
	this.bonus = 0;
	this.previousScore = [];
}

Bowling.prototype.randomScore = function() {
	if (this.round % 2 === 0) {
		this.score = Math.round(Math.random()*10);
	}
	if (this.round % 2 === 1) {
		this.secondScore = Math.round(Math.random()*(10-this.score));
	}
};

Bowling.prototype.scoreString = function() {
	if (this.score === 10 || this.secondScore === 10) {
		if (this.round % 2 === 0) {
			this.string += "__|" + this.score + ",";
		}
		if (this.round % 2 === 1) {
			this.string += this.secondScore + "|__";
		}
	} 
	else {
		if (this.round % 2 === 0) {
			this.string += "__|0" + this.score + ",";
		}
		if (this.round % 2 === 1) {
			this.string += "0" + this.secondScore + "|__";
		}
	}
};

Bowling.prototype.addRound = function() {
	this.round += 1;
};

Bowling.prototype.addScore = function() {
	this.scoreCard[this.currentFrame] = [this.score,this.secondScore];
};

Bowling.prototype.bonusDue = function() {
	if ( (this.previousScore[0] + this.previousScore[1]) === 10) {
		this.bonus = 1;
	}
	if ((this.previousScore[0] === 10) || (this.previousScore[1] === 10)) {
		this.bonus = 2;
	}
};

Bowling.prototype.prevScore = function() {
	this.previousScore = [this.score, this.secondScore];
};

Bowling.prototype.addTotal = function() {
	if (this.bonus === 2) {
		this.totalScore += ((this.score * 2) + (this.secondScore * 2));
	}
	if (this.bonus === 1) {
		this.totalScore += ((this.score * 2) + this.secondScore);
	}
	if (this.bonus === 0) {
		this.totalScore += (this.score + this.secondScore);
	}
};

Bowling.prototype.newFrame = function() {
	this.currentFrame += 1;
	this.bonus = 0;
};









