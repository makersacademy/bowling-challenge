function BonusCalc(game){
	this.game = game;
	this.bonusArray = [];
};

BonusCalc.prototype.processBonus = function(score,frameScore){
	this.addBonus(score);
	this.setBonusStatus(frameScore);
};

BonusCalc.prototype.setBonusStatus = function(frameScore){
	if ((frameScore === 10) && (!(this.game.isOnFirstRoll()))) {
		this.bonusArray.push('spare');
	};
	if ((frameScore === 10) && (this.game.isOnFirstRoll())) {
		this.bonusArray.push(this.game.strikeTracker);
		this.game.addOneToCurrentRoll();
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
