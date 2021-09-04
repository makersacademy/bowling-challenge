class Game {
	constructor(frame = new Frame()) {
		this.frameNo = 1;
		this.frames = [];
		this.currentFrame = frame;
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
		if (this.currentFrame.currentroll === 3) {
			this.nextFrame();
		}
	}
}
