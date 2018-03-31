function Scorecard() {}

function Frame() {
	this.pins = 10;
	this.rolls = [];
}

Frame.prototype.pins = function() {
	return this.pins;
};

module.exports = Scorecard;
module.exports = Frame;
