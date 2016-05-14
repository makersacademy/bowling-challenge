function BonusCalc(game){
	this.game = game;
	this.bonusArray = [];
};

BonusCalc.prototype.processBonus = function(score){
	this.addBonus(score);
	this.setBonusStatus();
};

BonusCalc.prototype.setBonusStatus = function(){
	if ((this.game.frameScore === 10) && (!(this.game.isOnFirstRoll()))) {
		this.bonusArray.push('spare');
	};
	if ((this.game.frameScore === 10) && (this.game.isOnFirstRoll())) {
		this.bonusArray.push(this.game.strikeTracker);
		this.game.currentRollUp();
	};
};

BonusCalc.prototype.addBonus = function(score){
	if (this.bonusArray.includes('spare')) {
		this.game.addToTotal(score);
		var index = this.bonusArray.indexOf('spare');
		this.bonusArray.splice(index,1);
	};
	if (this.bonusArray.includes((this.game.strikeTracker)-1)) {
		this.game.addToTotal(score);
	};
	if (this.bonusArray.includes((this.game.strikeTracker)-2)) {
		this.game.addToTotal(score);
		var index = this.bonusArray.indexOf((this.game.strikeTracker)-2);
		this.bonusArray.splice(index,1);
	};
};

BonusCalc.prototype.isBonusDue = function(){
	return (this.bonusArray.length > 0)
};
