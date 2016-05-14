function Game(bonusCalc){
	this.current_frame = 1;
	this.current_roll = 1;
	this.frame_score = 0;
	this.total_score = 0;
	this.bonusCalc = (bonusCalc || new BonusCalc(this));
};

// MAIN ROLL FUNCTION

Game.prototype.roll = function(score){
	if (this.isOver) {
		throw new Error('The game has ended');
	};
	if (this.current_frame > 10) {
		this.bonusCalc.addBonus(score);
	};
	if (this.current_frame <= 10) {
		this.addToScore(score);
		this.bonusCalc.processBonus(score);
	};
	this.prepareForNext();
	return this.calculateEnd();
};

// CALCULATING THE END //

Game.prototype.calculateEnd = function(){
	if ((this.current_frame > 10) && (this.bonusCalc.bonus_due === false)) {
		this.isOver = true;
		return {finalScore: this.total_score};
	};
};

// ADDING TO SCORE //

Game.prototype.add_to_total = function(score){
	this.total_score += score;
};

Game.prototype.addToScore = function(score){
	this.frame_score += score;
	this.total_score += score;
};

// PREPARING FOR THE NEXT FRAME //

Game.prototype.prepareForNext = function(){
	this.calculateFrame();
	this.calculateRoll();
	this.calculateFrameScoreReset();
}

Game.prototype.calculateFrameScoreReset = function(){
	if (this.current_roll === 1) {
		this.frame_score = 0;
	};
};

Game.prototype.calculateFrame = function(){
	if (this.current_roll === 2) {
		this.current_frame ++;
	};
};

Game.prototype.calculateRoll = function(){
	if (this.current_roll === 2) {
		this.current_roll = 1;
	} else {
		this.current_roll ++;
	};
};

Game.prototype.current_roll_up = function(){
	this.current_roll ++;
};