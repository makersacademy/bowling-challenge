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
	
	setFramecard(framecard){
		this.framecard = framecard;
		return this.framecard;
	}

	getScorecard(){
		return this.scorecard;
	}

	setScorecard(score){
		this.scorecard = score;
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
		let frame = this.getFrame();
		let framecard = this.getFramecard();

		if(framecard.length < (frame + 1)){
			if(roll == 10){
				framecard.push([roll,0])
			}else{
				framecard.push([roll]);
			}
		}else if(framecard[frame].length < 2 && frame < 9){
			let res = this.equalsOrUnder10(framecard[frame][0],roll);
			if(res && framecard[frame].length < 2){
				framecard[frame].push(roll);
			}else{
				console.log(`You'll have to enter roll 2 for frame ${frame + 1} again`)
			}
		}else if (framecard[frame].length == 2 && frame < 9){
			frame++;
			if(framecard.length < (frame + 1)){
				if(roll == 10){
					framecard.push([roll,0])
				}else{
					framecard.push([roll]);
				}
			}else if(framecard[frame].length < 2 && frame < 9){
				let res = this.equalsOrUnder10(framecard[frame][0],roll);
				if(res && framecard[frame].length < 2){
					framecard[frame].push(roll);
				}else{
					console.log(`You'll have to enter roll 2 for frame ${frame + 1} again`)
				}
			}
		}
		return this.setFramecard(framecard);
	}

	calcScore(){
		let frame = this.getFrame();
		let sum;
		let score = [];
		let framecard = this.getFramecard();
		const finalFrame = 9;

		/* I'm hoping there's a simpler way to do this, it feels like there must be a simpler way
		probably a recursive method */

		console.log(score, framecard)
		while(frame < framecard.length){

			if(this.isStrike(framecard,frame)){

				if(frame == finalFrame){
					console.log("I am the last frame")
					sum = 10 + framecard[frame][1] + framecard[frame][2]
					score.push(sum);

				}else if(framecard.length <= (frame+2)){

					if(framecard.length <= (frame+1)){

					console.log("I am longer than the frame I'm in by 1")
						score.push(10);

					}else{

					console.log("I am longer than the frame I'm in by at least 2")
						sum = 10 + framecard[frame+1][0];
						score.push(sum);

					}
				}else	if(this.isStrike(framecard,(frame+1))){


					console.log("The roll after me was also a strike")
					sum = 20 + framecard[frame+2][0];
					score.push(sum);

				}else{
					console.log("The roll after me was not a strike")
					sum = 10 + framecard[frame+1][0] + framecard[frame+1][1]; 
					score.push(sum);

				}
			}else if(this.isSpare(framecard,frame)){
				console.log("This frame is a spare")
				if(frame == finalFrame){

					sum = 10 + framecard[frame][1];
					score.push(sum); 

				}else if(framecard.length <= (frame+1)){

					sum = this.sumFrame(framecard[frame]);
					score.push(sum); 

				}else{

					sum = 10 + framecard[frame+1][0];
					score.push(sum); 

				}
			}else{

				sum = this.sumFrame(framecard[frame]);
				score.push(sum); 

			}
			this.nextFrame();
			frame = this.getFrame();
		}
		return score;
	}

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
		let currentScore = score[score.length - 1]
		return currentScore;
	}
}