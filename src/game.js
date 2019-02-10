class Game {
  constructor(frameNum, pins, score, allFrames){
  	this.allFrames = {};
  	this.frame = [];
  	this.pins = 10;
  	this.score = 0;
  }

  record(val){
  	this.frame.push(val)
  	checkFrame();
  }


	checkFrame(){
		if(this.frame[0] + this.frame[1] === 10 || this.frame.length === 2){
			this.allFrames.push(new [])
		}
		else{

		this.frame
		}
	}
}

module.exports = Game;
