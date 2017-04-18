"use strict";

function Frame(){
	this.rolls = [];
}

Frame.prototype.isComplete = function(){
	if ((this.score() === 10) || (this.rolls.length === 2)) {
		return true;
	} else {
		return false;
	}
}

Frame.prototype.isStrike = function(){
	if ((this.score() === 10) && (this.rolls.length === 1)) {
		return true;
	} else {
		return false;
	}
}

Frame.prototype.isSpare = function(){
	if ((this.score() === 10) && (this.rolls.length === 2)) {
		return true;
	} else {
		return false;
	}
}

Frame.prototype.addScore = function(currentScore) {
	this.rolls.push(currentScore);
}

Frame.prototype.score = function() {
	return this.rolls.reduce(function(a, b) {
  		return a + b;
	}, 0);
}


