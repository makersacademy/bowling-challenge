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
	if(this.round >10){
		throw new Error("The game has now ended");
	} else if(this.finalRound && this.rollNumber !=1){
		this.currentScore += pinsHit;
	} else {
		this.confirmMultipleStrikes(pinsHit);
		this.currentScore += pinsHit*(1 + this.spare)*(1 + this.strike);
	};
	this.confirmStrike(pinsHit);
	this.confirmSpare(pinsHit);
	this.gameEnded();	
	this.changeRoundNumber(pinsHit);
	this.changeRollNumber(pinsHit) ;
	this.lastHit = pinsHit;
};

Bowling.prototype.changeRollNumber = function(pinsHit){	
	if(this.finalRound && this.rollNumber ==2 && (this.lastHit==10 || this.spare==1) ){
		this.rollNumber = 3;
	} else if((this.rollNumber===1 && pinsHit==10 && !this.finalRound) || this.rollNumber==2 ){
		this.rollNumber = 1 ;
		this.confirmFinalRound();
	} else {
		this.rollNumber = 2 ;
	}
};

Bowling.prototype.changeRoundNumber = function(pinsHit){
	if((!this.finalRound && (this.rollNumber===2 || pinsHit==10 )) || this.gameOver){
		this.round +=1;
	}
};

Bowling.prototype.confirmSpare = function(pinsHit){
	if(this.rollNumber==2 && this.lastHit+pinsHit==10){
		this.spare=1;
	} else {
		this.spare =0;
	}
};

Bowling.prototype.confirmStrike = function(pinsHit){
if(pinsHit==10 || (this.rollNumber==1 && this.strike!=0) ){
		this.strike=1;
	} else {
		this.strike =0;
	}
};

Bowling.prototype.confirmMultipleStrikes = function(pinsHit){
	if(pinsHit==10 && this.strike==1){
		this.strike=2;
	} 
};

Bowling.prototype.confirmFinalRound = function(){
	if( this.round==10 ){
		this.finalRound = true;
	}
};

Bowling.prototype.gameEnded = function(){
	if(this.finalRound ==true && ((this.lastHit!=10 && this.spare==0 && this.rollNumber==2) || this.rollNumber==3)){
	 this.gameOver = true	;
	};
};

