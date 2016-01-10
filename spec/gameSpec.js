"use strict"

function Frame(){

	this.rollOne;
	this.rollTwo;

}





Frame.prototype.rollOne = function(){
	this.rollOne = Math.floor((Math.random() * 11));
	if(this.rollOne<10) {
		rollTwo();
	} else {

	}
};


Frame.prototype.rollTwo = function() {
	 let pinsLeft = (10-this.rollOne);
	 this.rollTwo = Math.floor((Math.random() * (pinsLeft+1)));
};

