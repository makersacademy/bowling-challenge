function Frame(number){
	this.number = number;
	this.rolls = [];
}

Frame.prototype.total = function(){
	var total = 0
	this.rolls.forEach(function(roll){
		total += roll;
	});
	return total;
}
