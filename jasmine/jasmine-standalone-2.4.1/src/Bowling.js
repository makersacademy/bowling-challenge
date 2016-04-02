function Bowling(){
	this.currentScore = 0;
	this.round = 1;
	this.rollNumber = 1;
	this.lastHit = 0
	this.spare = 0;
	this.strike = 0;
	this.finalRound = false;
	this.gameOver = false;
};



Bowling.prototype.updateScore = function(pinsHit){
	if(this.gameOver){
		throw new Error("The game has now ended");
	} else if(this.finalRound){
		this.currentScore += pinsHit;
	} else {
		this.currentScore += pinsHit*(1 + this.spare)*(1 + this.strike);
	};
		this.isStrike(pinsHit);
		this.isSpare(pinsHit);
		this.gameEnded();
		this.lastHit = pinsHit;
		this.changeRoundNumber();
		this.changeRollNumber() ;


};

Bowling.prototype.changeRollNumber = function(){
	
	if(this.finalRound && this.rollNumber ==2 && (this.strike==1 || this.spare==1) ){
		this.rollNumber = 3;
	} else if(this.rollNumber===1 && (this.strike==0 || this.finalRound)){
		this.rollNumber = 2 ;
	} else {
		this.rollNumber = 1 ;
	}
};

Bowling.prototype.changeRoundNumber = function(){
	if(!this.finalRound && (this.rollNumber===2 || this.strike===1 )){
		this.round +=1;
		this.isFinalRound();
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
	if((this.rollNumber==1 && (pinsHit==10 || this.strike==1)) || (this.finalRound & this.strike ==1) ){
		this.strike=1;
	} else {
		this.strike =0;
	}
};

Bowling.prototype.isFinalRound = function(){
	if( this.round==10 ){
		this.finalRound = true;
	}
};

Bowling.prototype.gameEnded = function(){
	if(this.finalRound ==true && ((this.strike==0 && this.spare==0 && this.rollNumber==2) || this.rollNumber==3)){
	 this.gameOver = true	;
	};
};
