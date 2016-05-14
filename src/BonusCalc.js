function BonusCalc(game){
	this.bonus_due = false;
	this.game = game;
};

BonusCalc.prototype.processBonus = function(score){
	this.addBonus(score);
	this.setBonusStatus();
};

BonusCalc.prototype.setBonusStatus = function(){
	if ((this.game.frame_score === 10) && (this.game.current_roll === 2)) {
		this.bonus_due = 'spare';
	};
	if ((this.game.frame_score === 10) && (this.game.current_roll === 1)) {
		this.bonus_due = 'strike';
		//change this to calling current_roll_check
		this.game.current_roll_up();
	};
};

BonusCalc.prototype.addBonus = function(score){
	if (this.bonus_due === 'spare') {
		this.game.add_to_total(score);
		this.bonus_due = false;
	};
	if (this.bonus_due === 'strike') {
		this.game.add_to_total(score);
		if (this.game.current_roll === 2) {
			this.bonus_due = false;
		};
	};
}

