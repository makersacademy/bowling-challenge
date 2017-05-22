'use strict';

function Game() {
	this.scoreCard = [];
    this.totalScore = 0;
    this.turn = 0;
    this.MAX_TURNS = 10;
    this.currentFrame = null;
    const scoreCard = new ScoreCard();
}

Game.prototype.play = function() {
	this.roll();
	this.checkFrame();
	this.updateScoreCard(frame.getScore());
};

Game.prototype.rollCount = function() {
	this.get
};

Game.prototype.roll = function() {
	if (this.currentFrame === null){
		this.currentFrame = new Frame;
	}
	this.currentFrame.roll();
};

