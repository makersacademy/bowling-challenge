class Game {
	constructor() {
		this.isOver = false;
		this.finalScore = null;
		this.frames = [];
		this.runningTotal = 0;
	}

	bowl(pinsDown1, pinsDown2, pinsDown3 = 0) {
		this.frames.push([pinsDown1, pinsDown2, pinsDown3]);
		this.status();
	}

	currentFrame() {
		return this.frames.length;
	}

	status() {
		if(this.currentFrame() === 10) {
			this.finish(true);
		}
	}

	finish(bool) {
		if(bool === true) {
			this.isOver = true;
			this.finalScore = this.calculateScore();
			return this.finalScore;
		}
	}

	isSpare(index) {
		let frame = this.frames;
		if(this.currentFrame() === 10) {
			this.runningTotal += frame[index][0] + 10;
		} else {
			this.runningTotal += frame[index + 1][0] + 10;
		}
	}

	isStrike(index){
		let frame = this.frames;

		switch(index) {
		case 8 :
			this.runningTotal += frame[index + 1][0] + frame[index + 1][1] + 10;
			break;

		case 9 :
			this.runningTotal += frame[index][0] + frame[index][0] + 10;
			break;

		default :
			if(frame[index + 1][0] === 10) {
				this.runningTotal += frame[index+1][0] + frame[index+2][0] + 10;
			} else {
				console.log(frame[index + 1][0]);
				this.runningTotal += frame[index+1][0] + frame[index+1][1] + 10;
			}
			break;

		}
	}

	calculateScore() {
		const _this = this;
		let frame = this.frames;

		frame.forEach(function(frameScore, index) {
			let total = frameScore.reduce((score, pins) => score + pins);

			if(frameScore[0] === 10) {
				_this.isStrike(index);
			} else if(total === 10) {
				_this.isSpare(index);
			} else {
				frameScore.forEach(function(pinsDown) {
					_this.runningTotal += pinsDown;
				});
			}
		});

		return this.runningTotal;
	}
}
