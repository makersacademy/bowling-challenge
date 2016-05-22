"use strict";

function Game(){
	this.frames = [];
	this.currentFrame = 1;
	// this.totalScore = 0;
	// this.completedFrames = [];
	// this.frameCount = 0;

	for (var i = 0; i < 10; i++) {
		this.frames.push(new Frame());
	}
};

Game.prototype.currentFrameNumber = function(){
	return this.currentFrame;
}

Game.prototype.addScore = function(number){
	this.frames[this.currentFrame - 1].addScore(number);

	if (this.frames[this.currentFrame - 1].isComplete()) {
		this.currentFrame += 1;
	}
}

// Game.prototype.updateCompletedFrames = function() {
// 	if (this.frames[this.currentFrame - 1].isComplete()) {
// 		this.completedFrames.push(this.frames[currentFrame - 1].rolls);
// 		this.currentFrame += 1;

// 	}
// }

Game.prototype.calculateScores = function(){
	var result = 0;

	for (var i = 0; i < 10; i++) {
		if (this.frames[i].isStrike()) {
			result += this.frames[i].score() + this.frames[i + 1].rolls[0] + this.frames[i + 1].rolls[1];
		} else if (this.frames[i].isSpare()) {
			result += this.frames[i].score() + this.frames[i + 1].rolls[0];
		} else {
			result += this.frames[i].score();
		}
	}
	return result;
}
