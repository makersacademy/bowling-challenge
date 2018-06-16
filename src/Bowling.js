function Bowling(){
	this._pins = 10

}

Bowling.prototype.pins = function () {
	return this._pins
};

Bowling.prototype.roll = function (number) {
	this._pins -= number;
};
