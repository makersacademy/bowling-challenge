var Scorer = function() {
	this.rolls = [];
};

Scorer.prototype.roll = function(score) {
	this.rolls.push(score)
};

Scorer.prototype.total = function(argument) {
	var runningTotal = 0;
	var rollNumber = 0;
	var frameNumber = 1;

	for (var i = frameNumber; i < 11; i++) {
		if(this.rolls[rollNumber] ===10) {
			this.rolls.splice(rollNumber+1,0,0);
			console.log(this.rolls);
			runningTotal = this.rolls[rollNumber] + this.rolls[rollNumber+1]+ this.rolls[rollNumber+2] + this.rolls[rollNumber+3];
			rollNumber = rollNumber+2;
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
