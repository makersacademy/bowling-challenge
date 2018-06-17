function Bowling(){
	this._pins = 10;
	this._score = 0;
	this._cumalativescore = [];
	this._frame = 1;
}

Bowling.prototype.pins = function () {
	return this._pins;
};

Bowling.prototype.currentTotalScore = function () {
	var sum = this._cumalativescore.reduce(add, 0);
	function add(a, b) {
			return a + b;
	}
	return sum;
};

Bowling.prototype.roll = function (number) {
	if(this._cumalativescore.length%2 == 0 && this._cumalativescore.length > 0) {
		this.newFrame()
	}
	if(number > this._pins) {
		throw new Error ("Not possible!");
	}
	this._score += number;
	this._pins -= number;
	this._cumalativescore.push(number)
};

Bowling.prototype.newFrame = function () {
	this._frame += 1
	this._pins = 10
	this._score = 0
};

Bowling.prototype.framescore = function () {
	return this._score;
};

Bowling.prototype.currentFrame = function () {
	return this._frame
};
