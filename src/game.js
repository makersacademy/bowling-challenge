"use strict"


function Game(){

	this.bowlingFrames = [];
	this.score = 0;
	this.frame1 = new Frame;
	this.frame2 = new Frame;
	

};


// Game.prototype.playFrame = function() {
// 	let frame = new Frame;
// 	frame.firstRoll();
// 	if(frame.strike){
		
		
		
// 	} else {
// 		frame.secondRoll();
// 		if(frame.spare){
// 			bowlingFrames.push(frame);
// 		}
// 	}
// };



// strike
// 	this.score += this.frame1.frameScore;
// 	bonus1 = frame2.rollOne;
// 	bonus2 = frame2.rollTwo;
// 	this.score=bonus1+bonus2

Game.prototype.playFrame = function() {
	frame1.firstRoll();
	frame1.secondRoll();
	frame2.firstRoll();
	frame2.secondRoll();
	if(frame1.strike){
		frame1.frameScore+=frame2.frameScore*2
	}
}
