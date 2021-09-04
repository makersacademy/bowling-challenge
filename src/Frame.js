class Frame {
	constructor() {
		this.currentroll = 1;
		this.rollOne = 0;
		this.rollTwo = 0;
	}

	roll(value) {
		if (this.currentroll === 1) {
			this.rollOne = value;
			this.currentroll++;
		} else if (this.currentroll === 2) {
			this.rollTwo = value;
		}
	}
}
