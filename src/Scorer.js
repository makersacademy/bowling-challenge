var Scorer = function() {
	this.rolls = [];
};

Scorer.prototype.roll = function(score) {
	this.rolls.push(score);
};

Scorer.prototype.total = function(first_argument) {
	var runningTotal = 0;
	var rollNumber = 0;
	var frameNumber = 1;
	for (var i = frameNumber; i < 11; i++) {
		if(this.rolls[rollNumber] === 10) {
			runningTotal = runningTotal+ this.rolls[rollNumber] + this.rolls[rollNumber + 1]+ this.rolls[rollNumber + 2];
			rollNumber = rollNumber + 1;
		} else if (this.rolls[rollNumber] + this.rolls[rollNumber+1] === 10) {
			runningTotal = runningTotal + this.rolls[rollNumber] + this.rolls[rollNumber+1]+ this.rolls[rollNumber+2];
			rollNumber = rollNumber+2;
		} else {
			runningTotal = runningTotal + this.rolls[rollNumber] + this.rolls[rollNumber+1];
			rollNumber = rollNumber+2;
		}
	};
	return runningTotal;
};
