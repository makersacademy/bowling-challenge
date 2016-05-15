function Game(bonusCalc){
	this.bonusCalc = (bonusCalc || new BonusCalc(this));
	this.currentRoll = 1;
	this.strikeTracker = 1;
	this.frameScore = 0;
	this.totalScore = 0;
};

// MAIN ROLL FUNCTION

Game.prototype.roll = function(score){
	if (this.isOver) {
		throw new Error('The game has ended');
	};
	if (this.currentFrame() > 10) {
		this.bonusCalc.addBonus(score);
	};
	if (this.currentFrame() <= 10) {
		this.addToScore(score);
		this.bonusCalc.processBonus(score);
	};
	this.prepareNextRollOrEnd();
};

// PREPARING NEXT ROLL

Game.prototype.prepareNextRollOrEnd = function(){
	this.nextRoll();
	this.calculateFrameScoreReset();
	if ((this.currentFrame() > 10) && (!(this.bonusCalc.isBonusDue()))) {
		this.isOver = true;
	};
};

Game.prototype.nextRoll = function(){
	this.currentRoll ++;
	this.strikeTracker ++;
};

Game.prototype.calculateFrameScoreReset = function(){
	if (this.isOnFirstRoll()) {
		this.frameScore = 0;
	};
};

// ADDING SCORES

Game.prototype.addToTotal = function(score){
	this.totalScore += score;
};

Game.prototype.addToScore = function(score){
	this.frameScore += score;
	this.totalScore += score;
};

// INTERPRETTING NUMBER OF ROLLS

Game.prototype.isOnFirstRoll = function(){
	return (!(this.currentRoll % 2 === 0))
};

Game.prototype.currentFrame = function(){
	return Math.round((this.currentRoll)/2)
};

Game.prototype.addOneToCurrentRoll = function(){
	this.currentRoll ++;
};