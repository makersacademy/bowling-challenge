function Bowling(){
	this.currentScore = 0;
	this.round = 1;
	this.rollNumber = 1;
	this.lastHit = 0
	this.spare = 0;
	this.strike = 0;
};



Bowling.prototype.updateScore = function(pinsHit){

		this.currentScore += pinsHit*(1 + this.spare)*(1 + this.strike);
		this.isStrike(pinsHit);
		this.isSpare(pinsHit);
		this.lastHit = pinsHit;
		this.changeRollNumber() ;
		this.changeRoundNumber();

};

Bowling.prototype.changeRollNumber = function(){
	if(this.rollNumber===1 && this.strike==0){
		this.rollNumber = 2 ;
	} else {
		this.rollNumber = 1 ;
	}
};

Bowling.prototype.changeRoundNumber = function(){
	if(this.rollNumber===2 || this.strike===1){
		this.round +=1;
	}
};

Bowling.prototype.isSpare = function(pinsHit){
	if(this.rollNumber==2 && this.lastHit+pinsHit==10){
		this.spare=1;
	} else {
		this.spare =0;
	}
};

Bowling.prototype.isStrike = function(pinsHit){
	if(this.rollNumber==1 && (pinsHit==10 || this.strike==1) ){
		this.strike=1;
	} else {
		this.strike =0;
	}
}
