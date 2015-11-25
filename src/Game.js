function Game() {
	this.total = 0;
	this.score = [];
	this.pinsLeft = 10;
  	this.currentFrame = 1;
	this.frameBallCount = 0;
}


Game.prototype.currentScore = function() {
	this.total = 0;
	for(var i = 0, len = this.score.length; i < len; i++) {
		if (this.score[i][0] === 10) {
			this.addStrike(i);
		} else {
			this.total += this.score[i][0];
		}
  	}
  	return this.total;
};

Game.prototype.strikeInput = function() {
	this.score.push([10, this.currentFrame]);
	this.currentFrame++;
	this.frameBallCount = 0;
};
Game.prototype.noPinsLeft = function() {
	if (this.pinsLeft === 0 ) {
		this.currentFrame++;
		this.frameBallCount = 0;
	}
};

Game.prototype.noBallsLeft = function() {
	if (this.frameBallCount === 2) {
		this.currentFrame++;
		this.frameBallCount = 0;
	}
};

Game.prototype.bowl = function(inputScore) {
	if (inputScore === 10) {
		this.strikeInput();
	} else {
		this.frameBallCount++;
		this.score.push([inputScore, this.currentFrame]);
		this.pinsLeft -= inputScore;

		this.noPinsLeft();
		this.noBallsLeft();
	}
};
Game.prototype.addStrike = function(i) {
	if (i < this.score.length - 2) {
		this.total += this.score[i][0] + this.score[i+1][0] + this.score[i+2][0];
	}
};



