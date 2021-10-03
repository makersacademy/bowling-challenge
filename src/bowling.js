class Scorecard {
	
	constructor(){
		this.frame = 0;
		this.framecard = [];
		this.scorecard = [];
	}

	getFrame(){
		return this.frame;
	}

	getFramecard(){
		return this.framecard;
	}

	getScorecard(){
		return this.scorecard;
	}


	inputRoll(num){
		if(num >= 0 && num <= 10){
			return num;
		}else{
			console.log("You must enter a number between 0 and 10")
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
				console.log(`You'll have to enter roll 2 for frame ${this.frame + 1} again`)
			}
		}
	}

	// calcScore(){
	// 	let x = 0;
	// 	let sum;
	// 	let score = [];
	// 	let framecard = this.getFramecard();

	// 	/* I'm hoping there's a simpler way to do this, it feels like there must be a simpler way
	// 	probably a recursive method */

	// 	while(x < framecard.length){
	// 		let finalFrame = 9
	// 		if(this.isStrike(framecard,x)){
	// 			if(x == finalFrame){
	// 				sum = 10 + framecard[x][1] + framecard[x][2]
	// 				score.push(sum);
	// 			}else if(framecard.length <= (x+2)){
	// 				if(framecard.length <= (x+1)){
	// 					score.push(10);
	// 				}else{
	// 					sum = 10 + framecard[x+1][0];
	// 					score.push(sum);
	// 				}
	// 			}else	if(this.isStrike(framecard,(x+1))){
	// 				sum = 20 + framecard[x+2][0];
	// 				score.push(sum);
	// 			}else{
	// 				sum = 10 + framecard[x+1][0] + framecard[x+1][1]; 
	// 				score.push(sum);
	// 			}
	// 		}else if(this.isSpare(framecard,x)){
	// 			if(x == finalFrame){
	// 				sum = 10 + framecard[x][1];
	// 				score.push(sum); 
	// 			}else if(framecard.length <= (x+1)){
	// 				sum = this.sumFrame(framecard[x]);
	// 				score.push(sum); 
	// 			}else{
	// 				sum = 10 + framecard[x+1][0];
	// 				score.push(sum); 
	// 			}
	// 		}else{
	// 			sum = this.sumFrame(framecard[x]);
	// 			score.push(sum); 
	// 		}
	// 	}
	// 	return score;
	// }

	equalsOrUnder10(roll1,roll2){
		let sum = roll1 + roll2;
		if(sum <= 10){
			return true;
		}
	}

	nextFrame(){
		this.frame++;
	}

	isStrike(arr, frame){
		if(arr[frame][0] == 10){
			return true;
		}
	}

	isSpare(arr, frame){
		if(this.equalsOrUnder10(arr[frame][0],arr[frame][1])){
			return true;
		}
	}

	sumFrame(arr){
		let sum = arr.reduce((a,b) => {
			return a + b;
		})
		return sum;
	}

	currentScore(){
		let score = this.calcScore();
		let currentScore = score[scoreArr.length - 1]
		return currentScore;
	}
}