"use strict";

function Game(){
	this.frames = [];
	this.currentFrame = 1;
	var frame;

	for (var i = 0; i < 12; i++) {
		frame = new Frame();
		this.frames.push(frame);
	}
}

Game.prototype.currentFrameNumber = function(){
	return this.currentFrame;
}

Game.prototype.addScore = function(number){
	this.frames[this.currentFrame - 1].addScore(number);

	if (this.frames[this.currentFrame - 1].isComplete()) {
		this.currentFrame += 1;
	}
}

Game.prototype.calculateScores = function(){
	var result = 0;

	for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
		if (this.frames[frameIndex].isStrike()) {
			result += this.frames[frameIndex].score() + this.frames[frameIndex + 1].score() + this.frames[frameIndex + 2].score();
		} else if (this.frames[frameIndex].isSpare()) {
			result += this.frames[frameIndex].score() + this.frames[frameIndex + 1].rolls[0];
		} else {
			result += this.frames[frameIndex].score();
		}
	}
	return result;
}
