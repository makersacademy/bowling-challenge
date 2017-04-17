"use strict"

function Frame(){

	this.rollOne = 0;
	this.rollTwo = 0;
	this.pinsLeft = 10;
	this.frameScore = 0;
	this.didStrike = false;
	this.didSpare = false;

};


Frame.prototype.getScore = function(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
};


Frame.prototype.firstRoll = function(){
	this.rollOne = this.getScore(0, 10)
	this.pinsLeft = (10-this.rollOne);
	if(this.pinsLeft>0) {
		console.log("You scored " + this.rollOne + ", roll again!");
	} else {
		this.rollOne = 10;
		this._frameScoreUpdate();
		this.didStrike = true;
		console.log("STRIKE!");
	}
};


Frame.prototype.secondRoll = function() {
	if(this.didStrike) {
		this.rollTwo = 0;
	} else {
	 this.rollTwo = this.getScore(0, this.pinsLeft);
	 this.pinsLeft -= this.rollTwo;
	 if(this.pinsLeft<1){
	 	this.didSpare = true;
	 	this._frameScoreUpdate();
	 	console.log("SPARE!");
	 } else {
	 	console.log("You scored " + this.rollTwo + ", next Frame...");
	 	this._frameScoreUpdate();
	 }
	}
};

Frame.prototype._frameScoreUpdate = function() {
	this.frameScore = this.rollOne + this.rollTwo;
};
