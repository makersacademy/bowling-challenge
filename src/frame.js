function Frame(){
	this.pins = 10
	this.rolls = 2
};

Frame.prototype.knockDown = function(number){
	if (this.pins < number){
		return "You cannot knock more than 10 pins";
	}
	else if (this.rolls === 0){
		return "There are no more rolls"
	}
	else {
	this.roll();
	return this.pins -= number;
	};
};

Frame.prototype.roll = function(){
	if (this.rolls < 1){
		return "You cannot roll more than twice"
	}
	else {
	this.rolls --
	};
};

