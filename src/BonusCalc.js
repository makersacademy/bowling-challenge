function BonusCalc(game,scoreBoard){
	this.game = game;
	this.scoreBoard = (scoreBoard || this.game.scoreBoard);
	this.bonusArray = [];
};

BonusCalc.prototype.processBonus = function(score){
	this.addBonus(score);
	this.setBonusStatus();
};

BonusCalc.prototype.setBonusStatus = function(){
	if ((this.scoreBoard.frameScore === 10) && (!(this.game.isOnFirstRoll()))) {
		this.bonusArray.push('spare');
	};
	if ((this.scoreBoard.frameScore === 10) && (this.game.isOnFirstRoll())) {
		this.bonusArray.push(this.game.strikeTracker);
		this.game.addOneToCurrentRoll();
	};
};

BonusCalc.prototype.addBonus = function(score){
	if (this.bonusArray.includes('spare')) {
		this.scoreBoard.addToTotal(score);
		this.deleteFromBonusArray('spare');
	};
	if (this.bonusArray.includes((this.game.strikeTracker)-1)) {
		this.scoreBoard.addToTotal(score);
	};
	if (this.bonusArray.includes((this.game.strikeTracker)-2)) {
		this.scoreBoard.addToTotal(score);
		this.deleteFromBonusArray((this.game.strikeTracker)-2);
	};
};

BonusCalc.prototype.deleteFromBonusArray = function(item){
	var index = this.bonusArray.indexOf(item);
	this.bonusArray.splice(index,1);
};

BonusCalc.prototype.isBonusDue = function(){
	return (this.bonusArray.length > 0)
};
