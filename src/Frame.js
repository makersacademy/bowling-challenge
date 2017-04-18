var MAXIMUM_PINS = 10
var STARTING_SCORE = 0

function Frame(){
	this.rollScore = STARTING_SCORE
	this.score = []
	this.pins = MAXIMUM_PINS
}

	
	Frame.prototype.firstBowl = function(pins) {
		this.rollScore = pins
		this.score.push(this.rollScore)
		this.pins = (MAXIMUM_PINS - this.rollScore)
	};

	Frame.prototype.secondBowl = function(pins) {
		this.rollScore = pins
		this.score.push(this.rollScore)
	};


	Frame.prototype.resetFrame = function() {
		this.pins = MAXIMUM_PINS
		this.score = []
	};


	Frame.prototype.randomBowl = function() {
	return Math.round(Math.random()*this.pins);
	};

	Frame.prototype.isStrike = function() {
		  if (this.rollScore === 10) {
		  return true
		}
	};