class Game {
  constructor(pins, score, history, index, bonus) {
    this.pins = 10;
		this.score = [];
    this.history = [[], [], [], [], [], [], [], [], [], []];
		this.index = 0;
		this.bonus
  }


  record(val) {
		const curFrame = this.history[this.index];
		
		curFrame.push(val);

		//second ball 
		if(curFrame.length > 1 && (curFrame[0] + curFrame[1])< 10){
			if (this.bonus === 2) {
				this.score.push(val + 10);	
				this.bonus = 0;
			}	
			this.bonus = 0;
			this.score.push(curFrame[0] + curFrame[1]);	
			this.pins = 10;	
			this.index += 1;	
		}

		//spare
		else if(curFrame.length > 1 && (curFrame[0] + curFrame[1]) === 10){
			if (this.bonus === 2){
				this.score.push(20)
			}
			this.bonus = 1;
			this.pins = 10;	
			this.index += 1;
		}

		//strike
		else if (curFrame.length < 1 && val === 10){
			this.bonus = 2;
			this.pins = 10;	
			this.index += 1;
		}

		//first ball of frame, no strike
		else {
			if (this.bonus === 1) {
				this.score.push(val + 10);	
				this.bonus = 0;
			}
			this.pins -= val
		}
	}

}


module.exports = Game;
