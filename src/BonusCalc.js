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
		var index = this.bonusArray.indexOf('spare');
		this.bonusArray.splice(index,1);
	};
	if (this.bonusArray.includes((this.game.strikeTracker)-1)) {
		this.scoreBoard.addToTotal(score);
	};
	if (this.bonusArray.includes((this.game.strikeTracker)-2)) {
		this.scoreBoard.addToTotal(score);
		var index = this.bonusArray.indexOf((this.game.strikeTracker)-2);
		this.bonusArray.splice(index,1);
	};
};

BonusCalc.prototype.isBonusDue = function(){
	return (this.bonusArray.length > 0)
};
