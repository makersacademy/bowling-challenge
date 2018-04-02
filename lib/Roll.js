function Roll() {
	this.pins = 10;
}

Roll.prototype.pins = function() {
	return this.pins;
};

module.exports = Roll;
