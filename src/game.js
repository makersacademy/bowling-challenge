"use strict"


function Game(){

	this.bowlingFrames = [];
	this.score = 0;
	this.scoresArray = [];	

};


Game.prototype.playFrame = function() {
	let frame = new Frame;
	if(this.scoresArray.length===8){
		frame.firstRoll();
		frame.secondRoll();
		this.bowlingFrames.push(frame);
		this._totalScore();
	} else if (this.bowlingFrames.length===2){
	this._bonusCheck();
	this.scoresArray.push(this.bowlingFrames[0].frameScore);
	this.bowlingFrames.shift();
	this.playFrame();
	} else {
		frame.firstRoll();
		frame.secondRoll();
		this.bowlingFrames.push(frame);
	}
};	


Game.prototype._bonusCheck = function() {
	if(this.bowlingFrames[0].didStrike){
		this.bowlingFrames[0].frameScore+=this.bowlingFrames[1].frameScore*2;
	} else if(this.bowlingFrames[0].didSpare){
		this.bowlingFrames[0].frameScore+=this.bowlingFrames[1].rollOne;
	} else {
		this.bowlingFrames[0].frameScore=this.bowlingFrames[0].frameScore;
	}
};

Game.prototype._totalScore = function() {
	this.scoresArray.push(this.bowlingFrames[0].frameScore);
	this.bowlingFrames.shift();
	this.scoresArray.push(this.bowlingFrames[0].frameScore);
	this.bowlingFrames.shift();
	this.score = this.scoresArray.reduce(function(a, b){ return a + b });
};
