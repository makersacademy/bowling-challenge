function Game(){
	this.current_frame = 1;
	this.current_roll = 1;
	this.total_score = 0;
	this.frame_score = 0;
	this.bonus_due = false;
};

Game.prototype.roll = function(score){
	if (this.game_end) {
		throw new Error('The game has ended');
	};
	if (this.current_frame > 10) {
		this.addBonus(score);
	};
	if (this.current_frame <= 10) {
		this.addToScore(score);
		this.calculateBonus(score);
	};
	this.prepareForNext();
	return this.calculateEnd();
};


// End calculator //

Game.prototype.calculateEnd = function(score){
	if ((this.current_frame > 10) && (this.bonus_due === false)) {
		this.game_end = true;
		return {finalScore: this.total_score};
	};
};

// add to score //

Game.prototype.addToScore = function(score){
	this.frame_score += score;
	this.total_score += score;
};

// bonus calculator //

Game.prototype.calculateBonus = function(score){
	this.addBonus(score);
	this.setBonusStatus();
};

Game.prototype.addBonus = function(score){
	if (this.bonus_due === 'spare') {
		this.total_score += score;
		this.bonus_due = false;
	};
	if (this.bonus_due === 'strike') {
		this.total_score += score;
		if (this.current_roll === 2) {
			this.bonus_due = false;
		};
	};
};

Game.prototype.setBonusStatus = function(){
	if ((this.frame_score === 10) && (this.current_roll === 2)) {
		this.bonus_due = 'spare';
	};
	if ((this.frame_score === 10) && (this.current_roll === 1)) {
		this.bonus_due = 'strike';
		this.current_roll ++;
	};
};

// prepare for next calculator //

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