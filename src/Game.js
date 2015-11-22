function Game() {
	this.score = [];
  this.currentFrame = 1;
	this.pinsLeft = 10;
	this.frameBallCount = 0;
}

Game.prototype.currentScore = function() {
  var total = 0
	// iterates through the score array
	for(var i = 0, len = this.score.length; i < len; i++) {
		// code for strikes/perfect game, todo: rewrite..
		if (this.score[i][0] === 10) {
			if (i < this.score.length - 2) {
				total += this.score[i][0] + this.score[i+1][0] + this.score[i+2][0]
			}

		// code for spare

		if (i < this.score.length - 2) {
			if (this.score[i][1] === this.score[i+1][1]) {
			var scorecheck = this.score[i][0] + this.score[i+1][0]
				if (scorecheck === 10) {
					total += this.score[i+2][0] + 100
				}
			}
		}

		// else just add it
		} else {
			total += this.score[i][0]
		}
  }
  return total;
};

Game.prototype.bowl = function(inputScore) {
	// check for strike
	if (inputScore === 10) {
		this.strikeInput();
	} else {
		// else increment ball count, and check for spares
		this.frameBallCount++;
		this.score.push([inputScore, this.currentFrame])
		this.pinsLeft -= inputScore

		if (this.pinsLeft === 0 ) {
			this.currentFrame++;
			this.frameBallCount = 0;
		}
		if (this.frameBallCount === 2) {
			this.currentFrame++;
			this.frameBallCount = 0;
		}
	}
};


Game.prototype.strikeInput = function() {
	this.score.push([10, this.currentFrame]);
	this.currentFrame++;
	this.frameBallCount = 0;
};
