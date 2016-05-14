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
	this.prepareNextRoll();
	return this.calculateEnd();
};

// ENDING THE GAME

Game.prototype.calculateEnd = function(){
	if ((this.currentFrame() > 10) && (!(this.bonusCalc.isBonusDue()))) {
		this.isOver = true;
		return {finalScore: this.totalScore};
	};
};

// PREPARING NEXT ROLL

Game.prototype.prepareNextRoll = function(){
	this.nextRoll();
	this.calculateFrameScoreReset();
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

Game.prototype.currentRollUp = function(){
	this.currentRoll ++;
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