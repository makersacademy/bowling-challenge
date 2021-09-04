class Game {
	constructor(frame = new Frame()) {
		this.frameNo = 1;
		this.frames = [];
		this.currentFrame = frame;
	}

	nextFrame(frame = new Frame()) {
		this.frames.push(this.currentFrame)
		this.frameNo++
		this.currentFrame = new Frame()
	}
}
