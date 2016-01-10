"use strict"


function Game(){

	this.frame1 = new Frame();
	this.frame2 = new Frame();
	this.frame3 = new Frame();
	this.frame4 = new Frame();
	this.frame5 = new Frame();
	this.frame6 = new Frame();
	this.frame7 = new Frame();
	this.frame8 = new Frame();
	this.frame9 = new Frame();
	this.frame10 = new Frame();

};



function Frame(){

	this.rollOne = 0;
	this.rollTwo = 0;
	this.pinsLeft = 10;

};





Frame.prototype.firstRoll = function(){
	this.rollOne = Math.floor((Math.random() * 11));
	if(this.rollOne<10) {
		console.log("You scored " + this.rollOne + ", roll again!")
	} else {
		this.rollOne = 10;
		console.log("STRIKE!")
	}
};


Frame.prototype.secondRoll = function() {
	 this.pinsLeft = (10-this.rollOne);
	 this.rollTwo = Math.floor((Math.random() * (pinsLeft+1)));
	 this.pinsLeft -= this.rollTwo
	 if(this.pinsLeft>0){
	 	console.log("SPARE!")
	 } else {
	 	console.log("You scored " + this.rollTwo + ", next Frame...");
	 }
	 
};



