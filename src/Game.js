class Game {
	constructor() {
		this.isOver = false;
		this.finalScore = 0;
		this.frames = [];
	}

	bowl(pinsDown1, pinsDown2) {
		this.frames.push([pinsDown1, pinsDown2]);
		this.status();
	}

	currentFrame() {
		return this.frames.length;
	}

	currentScore() {
		let runningTotal = 0;
		let frame = this.frames;
			frame.forEach(function(frameScore) {
				frameScore.forEach(function(pinsDown) {
					runningTotal += pinsDown;
			})
		})
		return runningTotal;
	}

	status() {
		if(this.frames.length === 10) {
      this.finish(true)
     }
	}

	finish(bool) {
		if(bool === true) { this.isOver = true; }
	}
}
