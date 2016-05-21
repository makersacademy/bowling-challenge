"use strict";

function Game(){
	this.frames = [];
	this.currentFrame = 1;
	this.countScore = 0;

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

Game.prototype.calculateScores = function(){
	for (var i = 0; i < 10; i++) {
		if (this.frames[i].isStrike()) {
			console.log(this.frames[i].score() + 10 + this.frames[i + 1].score());
		} else if (this.frames[i].isSpare()) {
			console.log(this.frames[i].score() + 10 + this.frames[i + 1].rolls[0]);
		} else {
			console.log(this.frames[i].score());
		}
	}
}
