function Frame(number){
	this.number = number;
	this.rolls = [];
}

Frame.prototype.calcTotal = function(){
	let total = 0;
	if(this.total !== undefined){
		total = this.total;
	}
	else{
		this.rolls.forEach(function(roll){
			total += roll;
		});
	}
	return total;
};
