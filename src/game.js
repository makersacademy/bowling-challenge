class Game {
  constructor(frameNum, pins, score){
  	this.frame =1;
  	this.pins = 10;
  	this.score = 0;
  }

  record(val){
  	if(val === 10){
  		this.frame += 1}
  	else{
  		this.pins -= val
  	}
  }



}




module.exports = Game;
