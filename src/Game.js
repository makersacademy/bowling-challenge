class Game {
	constructor() {
		this.isOver = false;
		this.finalScore = null;
		this.frames = [];
		this.currentScore = 0;
	}

	bowl(pinsDown1, pinsDown2, pinsDown3 = 0) {
		this.frames.push([pinsDown1, pinsDown2, pinsDown3]);
		this.status();
	}

	currentFrame() {
		return this.frames.length;
	}

	status() {
		if(this.frames.length === 10) {
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
			return frame[index][0] + 10;
		} else {
			console.log('LOADS OF TIMES')
			return frame[index + 1][0] + 10;
		}
	}

	calculateScore() {
		const _this = this;
		let runningTotal = 0;
		let frame = this.frames;

		frame.forEach(function(frameScore, index) {
			let total = frameScore.reduce((score, pins) => score + pins);

			if(total === 10) {
				runningTotal += _this.isSpare(index);
			} else {
				frameScore.forEach(function(pinsDown) {
					runningTotal += pinsDown;
				});
			}
		});
		this.currentScore = runningTotal;
		return runningTotal;
	}
}
