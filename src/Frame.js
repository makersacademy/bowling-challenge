var MAXIMUM_PINS = 10
var STARTING_SCORE = 0

function Frame(){
	this.rollScore = STARTING_SCORE
	this.score = []
	this.pins = MAXIMUM_PINS
}

	
	Frame.prototype.firstBowl = function() {
		this.bowl()
		this.score.push(this.rollScore)
		
	};

	Frame.prototype.secondBowl = function() {
		this.bowl()
		this.score.push(this.rollScore)
	};


	Frame.prototype.resetFrame = function() {
		this.pins = MAXIMUM_PINS
		this.score = []
	};


	Frame.prototype.bowl = function() {
	this.rollScore = Math.round(Math.random()*this.pins);
	this.pins = (MAXIMUM_PINS - this.rollScore)
	};

	Frame.prototype.isStrike = function() {
		  if (this.rollScore === 10) {
		  return true
		}
	};