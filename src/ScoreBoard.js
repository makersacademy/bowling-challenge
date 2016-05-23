function ScoreBoard(){
	this.totalScore = 0;
	this.frameScore = 0;
};

ScoreBoard.prototype.addToTotal = function(score){
	this.totalScore += score;
};

ScoreBoard.prototype.addToBoth = function(score){
	this.totalScore += score;
	this.frameScore += score;
};

ScoreBoard.prototype.resetFrameScore = function(){
	this.frameScore = 0;
};