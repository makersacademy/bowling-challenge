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
		// console.log(this.currentFrame.currentroll);
		// console.log(this.currentFrame);
		if (this.currentFrame.endFrame) {
			this.nextFrame();
		}
	}

	score() {
		for (let i = 0; i < this.frameNo - 1; i++) {
			if (this.isSpare(i)) {
				this.currentscore += this.frames[i + 1]["rollOne"];
			}
			this.currentscore +=
				this.frames[i]["rollOne"] + this.frames[i]["rollTwo"];
		}
		return this.currentscore;
	}

	isSpare(index) {
		return this.frames[index]["frameType"] === "Spare"
	}
}
