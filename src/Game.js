class Game {
	constructor(frame = new Frame()) {
		this.frameNo = 1;
		this.frames = [];
		this.currentFrame = frame;
		this.currentscore = 0;
	}

	nextFrame(frame = new Frame()) {
		this.frames.push(this.currentFrame);
		this.frameNo++;
		this.currentFrame = new Frame();
	}

	rollBall(value) {
		this.currentFrame.roll(value);
		if (this.currentFrame.endFrame) {
			this.nextFrame();
		}
	}

	score() {
		for (let i = 0; i < this.frameNo - 1; i++) {
			if (this.isSpare(i)) {
				this.currentscore += this.frames[i + 1]["rollOne"];
			}
			if (this.isStrike(i)) {
				this.scoreStrike(i);
			}
			this.currentscore +=
				this.frames[i]["rollOne"] + this.frames[i]["rollTwo"];
		}
		return this.currentscore;
	}

	isSpare(index) {
		return this.frames[index]["frameType"] === "Spare";
	}

	isStrike(index) {
		return this.frames[index]["frameType"] === "Strike";
	}

	scoreStrike(index) {
		if (!(this.isStrike(index + 1)) ) {
			this.currentscore +=
				this.frames[index + 1]["rollOne"] + this.frames[index + 1]["rollTwo"];		
		} else {
			this.currentscore +=
				this.frames[index + 1]["rollOne"] + this.frames[index + 2]["rollOne"];
		}
	}
}
