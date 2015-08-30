function Frame(){
	this.pins = 10;
	this.rolls = 2;
	this.totalScore = 0;
	this.bonusScore = 0; 
	this.rollOneScore = 0;
  this.rollTwoScore = 0;
};



Frame.prototype.rollOne= function(number){
	if (number > 10){
		return "You cannot knock more than 10 pins";
	}
	else {
	this.pins -= number
	this.rolls --
	this.rollOneScore = number;
  this.totalScore += this.rollOneScore;
	}; 
};


Frame.prototype.rollTwo= function(number){
	
  if (number > this.pins){
		return "You cannot knock unexisting pins";
	}
	if (this.rollOneScore === 10) {
    this.rollTwoScore = 0; 
  }
	else {
  	this.pins -= number
  	this.rolls --
    this.rollTwoScore = number;
    this.totalScore += this.rollTwoScore;
  };
};



Frame.prototype._isStrike = function(){
	return this.rollOneScore === 10;
};

Frame.prototype._isSpare = function(){
	if (this.rollTwoScore === 0) {
		return false
	}
	else if (this.rollOneScore + this.rollTwoScore === 10){
		return true
	}
	else {
		return false
	};
};
