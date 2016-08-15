'use strict';

function Game() {
	this.FRAMES = 10;
	this.currentFrame = [];
	this.currentScore = 0;
	this.MAX_SCORE = 300;
	this.frame_pins = 10;
	this.isStrike = false;
	this.isSpare = false;
}

Game.prototype.getCurrentScore = function() {
	return this.currentScore;
};

Game.prototype.frame = function(roll_1, roll_2, frame_number) {
	if (roll_1 === this.frame_pins) {
		this.isStrike = true;
		return this.currentFrame[frame_number] = [roll_1];
	}
	if (roll_1 < this.frame_pins && roll_2 < this.frame_pins) {
    if (roll_1 + roll_2 === this.frame_pins) {
  		this.isSpare = true;
  		return this.currentFrame[frame_number] = [roll_1, roll_2];
  	}
		return this.currentFrame[frame_number] = [roll_1, roll_2];
	}

	throw "illegal move"
};

Game.prototype.frameScore = function(frame_number) {
	return this.currentFrame[frame_number].reduce(function(a, b) {
		return a + b;
	});
};

Game.prototype.totalScore = function(frame_number) {
	for (var i = 0; i < frame_number; i++) {
		this.currentScore += (this.frameScore(i + 1) + this.frameStrike(i) + this.frameSpare(i));
	}
	return this.currentScore;
};

Game.prototype.frameStrike = function() {
	if (this.isStrike) {
		return this.frameScore(1) + this.frameScore(2);
    return this.isStrike = false;
	}
  return null;
};

Game.prototype.frameSpare = function() {
	if (this.isSpare) {
		return this.frameScore(1) + this.currentFrame[2][1];
    return this.isSpare = false;
	}
  return null;
};
