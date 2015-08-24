function Frame(){
	this.pins = 10
	this.rolls = 2
};

Frame.prototype.knockDown = function(number){
	if (this.pins < number){
		return "You cannot knock more than 10 pins";
	}
	else {
	this.pins -= number;
	};
};

