'use strict';

function Game() {
	this.scoreCard = [];
    this.totalScore = 0;
    
}

Game.prototype.play = function() {
	var frame = new Frame;
	frame.roll();
	this.updateScoreCard(frame.getScore());
};

Game.prototype.getTotalScore = function() {
    return this.totalScore;
};

Game.prototype.getScoreCard = function() {
    return this.scoreCard;
};

Game.prototype.updateTotalScore = function(subtotal) {
    this.totalScore += subtotal;
};

Game.prototype.updateScoreCard = function(subtotal) {
    this.scoreCard.push(subtotal);
};
