class Frame {
	constructor() {
		this.currentroll = 1;
		this.rollOne = 0;
		this.rollTwo = 0;
	}

	roll(value) {
		if (this.currentroll === 1) {
			this.rollOne = value;
			this.incremeantFrame();
		} else if (this.currentroll === 2) {
			this.rollTwo = value;
			this.currentroll++;
		}
	}

	incremeantFrame() {
		if (this.rollOne === 10) {
			this.currentroll += 2;
		} else {this.currentroll ++}
	}
}
