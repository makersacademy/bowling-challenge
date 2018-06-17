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
		this.newFrame();
	};
	if(number > this._pins) {
		throw new Error ("Not possible!");
	};
	if (this.isSpare()) {
		var lastrollnumber = this._cumalativescore.pop();
		this._cumalativescore.push(number + lastrollnumber);
	};
	this._pins -= number;
	this._score += number;
	this._cumalativescore.push(number);
};

Bowling.prototype.newFrame = function () {
	if(this.currentFrame() >= 10) {
		throw new Error ("Game finished: Your final score is ");
	}
	this._frame += 1;
	this._pins = 10;
	this._score = 0;
};

Bowling.prototype.framescore = function () {
	return this._score;
};

Bowling.prototype.currentFrame = function () {
	return this._frame;
};

Bowling.prototype.isSpare = function () {
	var firstlastscore = this._cumalativescore.pop();
	var secondlastscore = this._cumalativescore.pop();
	this._cumalativescore.push(secondlastscore);
	this._cumalativescore.push(firstlastscore);
	firstlastscore + secondlastscore = 10 && firstlastscore < 10 && secondlastscore < 10
};
