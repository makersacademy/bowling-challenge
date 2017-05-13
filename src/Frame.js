var Frame = function(rolls) {
	this.rolls = rolls;
	this.MAX_SCORE = 10;
};

Frame.prototype.total = function(next_frame, next_next_frame) {
	return this.rollScore() + this.bonusScore(next_frame, next_next_frame);
};

Frame.prototype.rollScore = function() {
	return this.rolls.reduce(function(score, roll) {
		return score + roll;
	});
};

Frame.prototype.bonusScore = function(next_frame, next_next_frame) {
	if (this.isStrike() && next_frame !== undefined) {
		return next_frame.bonusStrike(next_next_frame);
	}
	if (this.isSpare()&& next_frame !== undefined) {
		return next_frame.bonusSpare();
	}
	return 0;
};

Frame.prototype.isStrike = function() {
	return this.firstRoll() === this.MAX_SCORE;
};

Frame.prototype.isSpare = function() {
	return (this.rolls[0] + this.rolls[1]) === this.MAX_SCORE;
};

Frame.prototype.bonusStrike = function(next_frame) {
	if (this.isStrike() && next_frame !== undefined) {
		return this.rollScore() + next_frame.firstRoll();
	}
	return (this.rolls[0] + this.rolls[1]);
};

Frame.prototype.bonusSpare = function() {
	return this.firstRoll();
};

Frame.prototype.firstRoll = function() {
	return this.rolls[0];
};