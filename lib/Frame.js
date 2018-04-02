// Frame Function
function Frame() {
	this.pins = 10;
	this.rolls = [];
}

Frame.prototype.pins = function() {
	return this.pins;
};

Frame.prototype.logRoll = function(downedPins) {
	this.rolls.push(downedPins);
};

Frame.prototype.total = function() {
	var scoreRightNow = 0;
	for (var i = 0; i < this.rolls.length; i++) {
		scoreRightNow += this.rolls[i];
	}
	return scoreRightNow;
};

module.exports = Frame;
