class FinalFrame extends Frame {
	constructor() {
		super();
		this.rollThree = 0;
	}

	roll(value) {
		if (this.currentroll === 1) {
			this.rollOne = value;
			this.currentroll++;
		} else if (this.currentroll === 2) {
			this.rollTwo = value;
			this.currentroll++;
			if (!this.isStrike() || !this.isSpare()) {
				this.endFrame = true;
			} 
		} else if (this.isStrike() || this.isSpare()) {
			this.rollThree = value;
			this.endFrame = true;
		}
	}
}
