function Bowling(){
	this._pins = 10;
	this._score = 0;
	this._cumalativescore = [];
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
	if(number > this._pins) {
		throw new Error ("Not possible!");
	}
	this._pins -= number;
	this._score += number;
	this._cumalativescore.push(number)
};

Bowling.prototype.scores = function () {
	return this._score;
};
