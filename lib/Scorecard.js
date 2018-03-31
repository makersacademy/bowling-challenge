function Scorecard() {}

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
module.exports = Scorecard;
module.exports = Frame;
