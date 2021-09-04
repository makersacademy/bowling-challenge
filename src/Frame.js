class Frame {
	constructor() {
		this.currentroll = 1;
		this.rollOne = 0;
		this.rollTwo = 0;
	}

	roll(value) {
		if (this.currentroll === 1) {
			this.rollOne = value;
			this.incrementRoll();
		} else if (this.currentroll === 2) {
			this.rollTwo = value;
			this.currentroll++;
		}
	}

	incrementRoll() {
		if (this.isStrike()) {
			this.currentroll += 2;
		} else {
			this.currentroll++;
		}
	}

	isStrike() {
		return this.rollOne === 10;
	}

  isSpare() {
    return (this.rollOne < 10 && this.rollOne + this.rollTwo === 10)
  }
}
