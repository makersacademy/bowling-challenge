class Frames {
  constructor() {
    this.frames = [];
    this.frame = [];
  }

  addPins(pins) {
     this.frame.push(pins);
    if (this.frames.length === 2 && this.frame[0] + this.frame[1] === 10) {
      this.frame
    }
    if (this.isStrike()) {
      this.frames.push(this.frame);
      this.frame = [];
    } else if (this.frame.length === 2) {
      this.frames.push(this.frame);
      this.frame = [];
    } else {
      this.frame
    }
}

  isStrike() {
    return this.frame.length === 1 && this.frame == 10;
  }

  // isSpare(pins) {
  //   return this.frame ===
  // }
}

module.exports = Frames