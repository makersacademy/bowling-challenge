class Scorecard {
	
	constructor(){
		this.frame = 0;
		this.framecard = [];
	}

	inputRoll(num){
		if(num >= 0 && num <= 10){
			return num;
		}
	}

	addToFrame(roll){
		if(this.framecard.length < (this.frame + 1)){
			if(roll == 10){
				this.framecard.push([roll,0])
			}else{
				this.framecard.push([roll]);
			}
		}else{
			let res = this.equalsOrUnder10(this.framecard[this.frame][0],roll);
			if(res){
				this.framecard[this.frame].push(roll);
			}else{
				console.log(`You'll have to enter roll2 for frame ${this.frame + 1} again`)
			}
		}
	}

	equalsOrUnder10(roll1,roll2){
		let sum = roll1 + roll2;
		if(sum <= 10){
			return true;
		}
	}
}