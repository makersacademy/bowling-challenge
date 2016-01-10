function Frame(){

	this.rollOne = 0;
	this.rollTwo = 0;
	this.pinsLeft = 10;
	this.frameScore = 0;
};



Frame.prototype.firstRoll = function(){
	this.rollOne = Math.floor((Math.random() * 11));
	this.pinsLeft = (10-this.rollOne);
	if(this.pinsLeft>0) {
		console.log("You scored " + this.rollOne + ", roll again!");
	} else {
		this.rollOne = 10;
		this.frameScoreUpdate();
		console.log("STRIKE!");
	}
};


Frame.prototype.secondRoll = function() {
	 this.rollTwo = Math.floor((Math.random() * (this.pinsLeft+1)));
	 this.pinsLeft -= this.rollTwo
	 if(this.pinsLeft<1){
	 	console.log("SPARE!");
	 	this.frameScoreUpdate();
	 } else {
	 	console.log("You scored " + this.rollTwo + ", next Frame...");
	 	this.frameScoreUpdate();
	 }
};

Frame.prototype.frameScoreUpdate = function() {
	this.frameScore = this.rollOne + this.rollTwo;
};
