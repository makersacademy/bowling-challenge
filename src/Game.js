function Game(bonusCalc,scoreBoard){
	this.scoreBoard = (scoreBoard || new ScoreBoard());
	this.bonusCalc = (bonusCalc || new BonusCalc(this));
	this.currentRoll = 1;
	this.strikeTracker = 1;
};

// MAIN ROLL FUNCTION

Game.prototype.roll = function(score){
	this.checkForErrors(score);
	if (this.currentFrame() > 10) {
		this.bonusCalc.addBonus(score);
	};
	if (this.currentFrame() <= 10) {
		this.scoreBoard.addToBoth(score);
		this.bonusCalc.processBonus(score);
	};
	this.prepareNextRollOrEnd();
};

// CHECK FOR ERRORS

Game.prototype.checkForErrors = function(score){
	if (this.scoreBoard.frameScore + score > 10) {
		throw new Error('Invalid score');
	};
	if (this.isOver) {
		throw new Error('The game has ended');
	};
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
		this.scoreBoard.resetFrameScore();
	};
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