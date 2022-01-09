
class BowlingGame{
	constructor(){
		this.score = Array.from( new Array(10), () => { return []; } ); // starts with an array.length of 10, filled with a sub_arr of 0s
		this.rollNum = 1; // this variable will fluctuate between 1 and 2, to account for two rolls in one frame
		this.frameNum = 1; // this means the game starts with a default frame of 1
		this.perfectGameBonus = 200;
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
		}else{ // this else block accounts for the last throw/roll
			this.score[9].push(pins)
		}
	}

	isStrike(frame){ // checks if the throw is a strike
		return frame.includes(10) ? true : false
	}

	isSpare(frame){
		if ((frame.reduce((el, acc) => el + acc, 0) === 10) && (!frame.includes(10))){
			return true
		}
		return false
	}

	isPerfectGame(){
		let mergedScore = [].concat.apply([], this.score)
		return mergedScore.every(el => el === 10)
	}

	calculateScore(){
		let bonus = [];

		if(this.isPerfectGame()){
			let mergedScore = [].concat.apply([], this.score).reduce((el, acc) => el + acc, 0)
			return mergedScore + this.perfectGameBonus
		}
		
			this.score.forEach((frame, index) =>{
				if(this.isStrike(frame)){
					if(!(this.score[index + 1] == undefined)){
						bonus.push(this.score[index + 1][0])
						bonus.push(this.score[index + 1][1])
					}else{
						bonus.push(this.score[index])
					}
				}
				else if(this.isSpare(frame)){
					if(!(this.score[index + 1] == undefined)){
						bonus.push(this.score[index + 1][0])
					}
				}
			})
			let filteredBonus = bonus.filter( el => el != null).reduce((el, acc) => el + acc, 0)
			let score = [].concat.apply([], this.score).reduce((el, acc) => el + acc, 0)
			return score + filteredBonus
	}
}

export default BowlingGame;