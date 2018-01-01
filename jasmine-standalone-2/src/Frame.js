function Frame(){
	this._rollNumber = 0
	this._score = 0
};

Frame.prototype.roll = function(number){
	this._rollNumber++;
	if(this.isRollExpected()){
		this._score += number;
	};
};

Frame.prototype.score = function(){
	return this._score
};

Frame.prototype.isComplete = function(){
	return (this._rollNumber >=2 || this._score >= 10);
};

Frame.prototype.isRollExpected = function(){
	return (this._rollNumber <=3 && this._score >= 10)||(this._rollNumber <=2)
};