// Frame Function
function Frame() {
	this.rolls = [];
	this.rollCount = 2;
}

Frame.prototype.pins = function() {
	return this.pins;
};

Frame.prototype.logRoll = function(downedPins) {
	this.rolls.push(downedPins);
	this.rollCount -= 1;
};

Frame.prototype.total = function() {
	var scoreRightNow = 0;
	for (var i = 0; i < this.rolls.length; i++) {
		scoreRightNow += this.rolls[i];
	}
	return scoreRightNow;
};

module.exports = Frame;
