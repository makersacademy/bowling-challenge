function Bowling(){
	this.currentScore = 0;
	this.round = 1;
	this.rollNumber = 1;

};



Bowling.prototype.updateScore = function(pinsHit){
	this.currentScore = pinsHit;
	this.changeRollNumber() ;
};

Bowling.prototype.changeRollNumber = function(){
	if(this.rollNumber===1){
		this.rollNumber = 2 ;
	} else {
		this.rollNumber = 1 ;
	}
};

