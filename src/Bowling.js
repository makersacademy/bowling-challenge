function Bowling(){
	this.cumalativescore = [];
}

Bowling.prototype.totalScore = function () {
	var sum = 0;
	var roll = 0;
	var bowlinggame = this;
	for (var frame = 0; frame < 10; frame++) {
		if (strike()) {
			sum += scoreifstrike();
			roll++;
		} else if (spare()) {
			sum += scoreifspare();
			roll += 2;
		} else {
			sum += scoreifNotspare();
			roll += 2;
		}
	};
	return sum;

	function spare() {
		return bowlinggame.cumalativescore[roll] + bowlinggame.cumalativescore[roll + 1] == 10;
	}

	function scoreifspare() {
		return bowlinggame.cumalativescore[roll] + bowlinggame.cumalativescore[roll + 1] + bowlinggame.cumalativescore[roll + 2];
	}

	function scoreifNotspare() {
		return bowlinggame.cumalativescore[roll] + bowlinggame.cumalativescore[roll + 1];
	}

	function strike () {
		return bowlinggame.cumalativescore[roll] == 10;
	}

	function scoreifstrike() {
		return bowlinggame.cumalativescore[roll] + bowlinggame.cumalativescore[roll + 1] + bowlinggame.cumalativescore[roll + 2];
	}
};

Bowling.prototype.roll = function (number) {
	this.cumalativescore.push(number);
};

Bowling.prototype.reset = function(){
	this.cumalativescore = [];
};

Bowling.prototype.runningTotal = function () {
	var sum = this.cumalativescore.reduce(add, 0);
	function add(a, b) {
    return a + b;
	}
	return sum
};

Bowling.prototype.frameNumber = function () {
	var frameNumber = Math.ceil(this.cumalativescore.length / 2);
	return frameNumber;
};
