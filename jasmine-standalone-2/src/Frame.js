function Frame(){
	this.rollNumber = 1
	this._score = 0
};

Frame.prototype.roll = function(number){
	
	if(this.isRollExpected()){
		this.rollNumber++;
		this._score += number;
	};
	
};

Frame.prototype.score = function(){
	return this._score
};

Frame.prototype.isComplete = function(){
	return (this.rollNumber >=3 || this._score >= 10);
};

Frame.prototype.isRollExpected = function(){
	return (this.rollNumber <=3 && this._score >= 10)||(this.rollNumber <=2)
};