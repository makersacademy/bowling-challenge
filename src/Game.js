function Game() {
	this.score = [];
  this.currentFrame = 1;
	this.bowlCount = 0;
	//
	// this.strikeCounter = 0;
	// this.strikeScore = 0;
}

Game.prototype.currentScore = function() {
  // return this.score
  var total = 0
	for(var i = 0, len = this.score.length; i < len; i++) {
		if (this.score[i] === 10) {
			if (i < this.score.length - 2) {
				total += this.score[i] + this.score[i+1] + this.score[i+2]
			} 
		} else {
			total += this.score[i]
		}
  }
  return total;
};

Game.prototype.bowl = function(inputScore) {
	if (inputScore === 10) {
		this.strike();
	} else {
		this.score.push(inputScore)
	}
};

// Game.prototype.isStrike = function(index) {
// 	if (this.score[index] === 10) {
// 	 	if (index <= ((this.score.length) - 2)) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	} else {
// 		return false;
// 	}
// }


Game.prototype.strike = function() {
	this.currentFrame++
	this.score.push(10)
};
