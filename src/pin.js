function Pin() {
	this.pins = 10;
};

Pin.prototype.currentPins = function() {
	return this.pins;
};

Pin.prototype.pinsDown = function(pinsKnocked) {
	return this.pins -= pinsKnocked;
};