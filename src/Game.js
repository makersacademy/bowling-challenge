class Game {
	constructor() {
		this.isOver = false;
		this.finalScore = null;
		this.frames = [];
	}

	bowl(pinsDown1, pinsDown2) {
		this.frames.push([pinsDown1, pinsDown2]);
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

	calculateScore() {
		let runningTotal = 0;
		let frame = this.frames;

		frame.forEach(function(frameScore, index) {
			frameScore.forEach(function(pinsDown) {

				if(frameScore.reduce((score, pins) => score + pins) === 10) {
					runningTotal += pinsDown + frame[index + 1][0];
				} else {
					runningTotal += pinsDown;
				}

			})
		})
		return runningTotal;
	}
}
