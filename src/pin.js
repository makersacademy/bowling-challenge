function Pin() {
	this.pins = 10;
};

Pin.prototype.currentPins = function() {
	return this.pins;
};

Pin.prototype.pinsDown = function(pinsKnocked) {
	this.pins -= pinsKnocked;
	if (this.pins < 0) {
		return this.pins = 0;
	};
};

Pin.prototype.resetPins = function() {
	return this.pins = 10;
};