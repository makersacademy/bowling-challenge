class Game {
	constructor(scorecard = new Scorecard) {
		this.isOver = false;
		this.currentScore = 0;
		this.finalScore = 0;
		this.scorecard = scorecard;
	}

	bowl(pinsDown1, pinsDown2) {
		this.scorecard.frames.push(pinsDown1, pinsDown2);
		this.currentRoll++;
		// this.status();
	}

	finish(bool) {
		if(bool === true) { this.isOver = true; }
	}
}
