
class BowlingGame{
	constructor(){
		this.score = Array.from( new Array(10), () => { return []; } ); // starts with an array.length of 10, filled with a sub_arr of 0s
		this.rollNum = 1; // this variable will fluctuate between 1 and 2, to account for two rolls in one frame
		this.frameNum = 1; // this means the game starts with a default frame of 1
	}

	roll(pins){
		if(this.frameNum < 10){
			if(pins < 10 && this.rollNum === 1){
				this.score[this.frameNum - 1].push(pins)
				this.rollNum++;
			}else if(pins < 10 && this.rollNum === 2){
				this.score[this.frameNum - 1].push(pins)
				this.frameNum++;
				this.rollNum--;
			}else{	// this `else block` accounts for a strike
				this.score[this.frameNum - 1].push(pins);
				this.frameNum++;
			}
		}
	}

	isStrike(frame){
		return frame.includes(10) ? true : false
	}

	isSpare(frame){
		return !frame.includes(10) && frame.reduce((el, acc) => el + acc, 0) ? true : false
	}

}

export default BowlingGame;