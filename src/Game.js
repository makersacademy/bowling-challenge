var Game = function() {
	this.frameNumber = 1;
	this.totalScore = 0;
	this.firstThrow = true;
	this.pinsHit = 5;
	this.lastFrame = '';
	this.scoreCard = {
		1:[],
		2:[],
		3:[],
		4:[],
		6:[],
		7:[],
		8:[],
		9:[],
		10:[]
	};
};

Game.prototype.throwBall = function() {
	this.totalScore += this.pinsHit;
	this.addThrowToScoreCard();
	this.isStrike();
	this.isSpare();
	this.changeFrameNumber();
	// this.firstThrow = !this.firstThrow;
};

Game.prototype.changeFrameNumber = function() {
	if ((this.firstThrow) == false) {
		this.frameNumber += 1;
		this.firstThrow = true;
		this.isSpare();
	};
};

Game.prototype.addThrowToScoreCard = function() {
	this.scoreCard[this.frameNumber].push(this.pinsHit);
};

Game.prototype.isSpare = function() {
	var sum = this.scoreCard[this.frameNumber].reduce((a,b) => a+b);
	if (sum = 10) {
		this.lastFrame = '/';
	};
	// (this.scoreCard[(this.frameNumber-1)][0]) + this.scoreCard[(this.frameNumber-1)][1]);
};

Game.prototype.isStrike = function() {
	if ((this.scoreCard[this.frameNumber][0]) == 10) {
		this.lastFrame = 'X';
		this.frameNumber += 1;
		this.firstThrow = true;
	};
};









