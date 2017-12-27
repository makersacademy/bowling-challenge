function Frame(){
	this.pins = 10;
	this.roll = [];
}

Frame.prototype.appendNumberPinsDown = function(pinsDown) {
	this.roll.push(pinsDown);
};

Frame.prototype.addTotalFramePoints = function(){
	if (!this.roll) return 0;
	var total = 0;
	for(var i = 0; i < this.roll.length; i++) {
		total += this.roll[i];
	}
	return total;
};
