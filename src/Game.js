'use strict';

var Game = function() {
	this.totalScore = 0;
	this.currentFrame = 1;
	this.currentFrameScore = 0;
	this.rollsInFrame = 0;
	this.pinsLeft = 10;
	this.frames = [];
	this.rolls = [];
	this.lastRoll;
	this.framesAdded = [];
};

Game.prototype.roll = function(pins) {
	this.lastRoll = pins;
	this.rolls.push(pins);

	if (pins > this.pinsLeft) {
		this.rolls.splice(-1, 1);
		this.lastRoll = this.rolls[this.rolls.length-1];
	} else if (pins === 10) {
		this.strike();
	} else {
		this.currentFrameScore += pins;
		this.rollsInFrame += 1;
		this.pinsLeft -= pins;
	}

	if (this.rollsInFrame === 2) {
		this.addToTotal();
	}

	this.incrementFrames();
};

Game.prototype.addToTotal = function() {
	this.currentFrame += 1;
	this.totalScore += this.currentFrameScore;
	this.frames.push(this.currentFrameScore);
	this.reset();
};

Game.prototype.reset = function() {
	this.currentFrameScore = 0;
	this.rollsInFrame = 0;
	this.pinsLeft = 10;
};

Game.prototype.strike = function() {
	this.currentFrameScore += 10;
	this.addToTotal();
};


Game.prototype.score = function() {
	var result = 0;
	var rollIndex = 0;
	var game = this;
	var totalFrames = 0;

	if (this.currentFrame > 10) {
		totalFrames = 10;
	} else {
		totalFrames = this.currentFrame;
	}

	for(var frameIndex = 0; frameIndex < totalFrames; frameIndex++) {
		if (isStrike()) {
			game.frames[frameIndex] = getStrikeScore();
			result += getStrikeScore();
			rollIndex++;
		} else if (isSpare()) {
			game.frames[frameIndex] = getSpareScore();
			result += getSpareScore();
			rollIndex += 2;
		} else {
			result += getNormalScore();
			rollIndex += 2;
		}
	}

	this.totalScore += result;
	return result;

	function isSpare() {
		return game.rolls[rollIndex] + game.rolls[rollIndex+1] === 10;
	}
	function isStrike() {
		return game.rolls[rollIndex] === 10;
	}
	function getSpareScore() {
		return game.rolls[rollIndex] + game.rolls[rollIndex+1] + game.rolls[rollIndex+2];
	}
	function getStrikeScore() {
		return game.rolls[rollIndex] + game.rolls[rollIndex+1] + game.rolls[rollIndex+2];
	}
	function getNormalScore() {
		return game.rolls[rollIndex] + game.rolls[rollIndex+1];
	}
};

Game.prototype.framesTotal = function() {
	var total = 0;
	for(var i = 0; i < this.frames.length; i++) {
		total += this.frames[i];
	}
	return total;
};

Game.prototype.incrementFrames = function() {
	var arr = [];
	var game = this;

	var result = 0;
	this.frames.forEach(function(frame) {
		if (isNaN(frame)) {
			frame = '...';
			arr.push(frame);
		} else {
			result += frame;
			arr.push(result);
		}
	});

	game.framesAdded = arr;
};
