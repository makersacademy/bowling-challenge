class Frame {
  constructor() {
    this.currentroll = 1;
    this.rollOne = 0;
    this.rollTwo = 0;
    this.endFrame = false;
    this.frameType = 'Normal';
  }

  roll(value) {
    if (this.currentroll === 1) {
      this.rollOne = value;
      this.incrementRoll();
    } else if (this.currentroll === 2) {
      this.rollTwo = value;
      this.endFrame = true;
      if (this.isSpare()) {
        this.frameType = 'Spare';
      }
    }
  }

  incrementRoll() {
    if (this.isStrike()) {
      this.frameType = 'Strike';
      this.endFrame = true;
    } else {
      this.currentroll++;
    }
  }

  isStrike() {
    return this.rollOne === 10;
  }

  isSpare() {
    return this.rollOne < 10 && this.rollOne + this.rollTwo === 10;
  }
}
