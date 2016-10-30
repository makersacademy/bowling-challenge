'use strict';

function Frame() {
	this.frameNumber = 1;
	this.pinsRemaining = 10;
	this.bowlsRemaining = 2;
	this.frameScore = 0;
	this.bonusScore = 0;
	this.bowlOneScore = 0;
	this.bowlTwoScore = 0;
	this.currentTotal = 0;
}

function Scorecard() {
	this.frames = [];
	this.currentFrame = new Frame();
	this.totalScore = 0;
}


Scorecard.prototype.updateScore = function(n) {
	this.totalScore += n;
	this.currentFrame.frameScore += n;
	this.updateCurrentBowlScore(n);
};

Scorecard.prototype.updateCurrentBowlScore = function(n) {
	if(this.currentFrame.bowlsRemaining === 2) {
		this.currentFrame.bowlOneScore += n;
	} else {
		this.currentFrame.bowlTwoScore += n;
	}
};

Scorecard.prototype.newFrame = function() {
	this.frames.push(this.currentFrame)
	this.currentFrame = new Frame();
	this.currentFrame.frameNumber = this.frames.length + 1;
};

Scorecard.prototype.reducePinsRemaining = function(n) {
	this.currentFrame.pinsRemaining -= n;
};

Scorecard.prototype.reduceBowlsRemaining = function() {
	this.currentFrame.bowlsRemaining -= 1;
};

Scorecard.prototype.isFrameOver = function() {
	if(this.currentFrame.frameNumber != 10 && (this.currentFrame.pinsRemaining === 0 || this.currentFrame.bowlsRemaining === 0) ) {
		this.newFrame();
	} else {
		if(this.currentFrame.bonusScore > 0) {
			this.currentFrame.bowlsRemaining = this.currentFrame.bonusScore;
			this.currentFrame.pinsRemaining = 10;
			this.bonusScore();
			this.updateScore();	
		}
	}
};

Scorecard.prototype.isStrikeOrSpare = function() {
	if(this.currentFrame.pinsRemaining === 0 && this.currentFrame.bowlsRemaining === 1) {
			if(this.currentFrame.frameNumber === 10) {
			} else {
				this.currentFrame.bonusScore += 2;
				this.currentFrame.bowlTwoScore = "X";
			}
	} else if(this.currentFrame.pinsRemaining === 0 && this.currentFrame.bowlsRemaining === 0) {
		if (this.currentFrame.frameNumber === 10) {
		} else {
			this.currentFrame.bonusScore += 1;
			this.currentFrame.bowlTwoScore = "/";
		}
	}
};

Scorecard.prototype.bonusScore = function(n) {
	for(var i=0;i<scorecard.frames.length;i++) {
		var frame = scorecard.frames[i];
		if(frame.bonusScore > 0) {
			frame.frameScore += n;
			scorecard.totalScore += n;
			frame.bonusScore -= 1;
		}
	}
	this.currentFrame.currentTotal = this.totalScore;
};






Scorecard.prototype.updateScorecard = function(n) {
	this.updateScore(n);
	this.bonusScore(n);
	this.reducePinsRemaining(n);
	this.reduceBowlsRemaining();
	this.isStrikeOrSpare();
	this.isFrameOver();
	console.log(this.currentFrame);
};

