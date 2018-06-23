function Bowling(){
	this.pins = 10;
	this.framescore = 0;
	this.cumalativescore = [];
	this.frame = 1;
}

Bowling.prototype.currentpins = function () {
	return this.pins;
};

Bowling.prototype.score = function () {
	var sum = 0;
	var roll = 0;
	for (var frame = 0; frame < 10; frame++) {
		if (this.cumalativescore[roll] + this.cumalativescore[roll + 1] == 10) {
			sum += this.cumalativescore[roll] + this.cumalativescore[roll + 1] + this.cumalativescore[roll + 2];
		} else {
			sum += (this.cumalativescore[roll] + this.cumalativescore[roll + 1]);
		}
		roll += 2;
	};
	return sum;
};

Bowling.prototype.roll = function (number) {
	if(this.cumalativescore.length%2 == 0 && this.cumalativescore.length > 0) {
		this.newFrame();
	};
	if(number > this.pins) {
		throw new Error ("Not possible!");
	};
	this.pins -= number;
	this.framescore += number;
	this.cumalativescore.push(number);
};

Bowling.prototype.newFrame = function () {
	if(this.currentFrame() >= 10) {
		throw new Error ("Game finished: Your final score is ");
	}
	this.frame += 1;
	this.pins = 10;
	this.framescore = 0;
};

Bowling.prototype.framescore = function () {
	return this.framescore;
};

Bowling.prototype.currentFrame = function () {
	return this.frame;
};
