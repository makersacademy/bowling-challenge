function Game() {
	this.score = [];
  this.currentFrame = 1;
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


Game.prototype.strike = function() {
	this.currentFrame++
	this.score.push(10)
};
