
function Bowling(){
	var MAXIMUM_PINS = 10
	var STARTING_SCORE = 0
	this.pins = MAXIMUM_PINS
	this.totalScore = STARTING_SCORE
	this.frameScore = STARTING_SCORE

Bowling.prototype.roll = function() {
	this.frameScore = Math.floor((Math.random()*10)+1)

};

}