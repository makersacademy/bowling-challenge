class Frames {
  constructor() {
    this.frames = [];
    this.frame = [];
    this.framesCounter = 0;
  }

  addPins(pins) {
    this.frame.push(pins);
    if (this.framesCounter === 9) {
      if (this.frame) this.frames.push(pins);
    } else if (this.isStrike()) {
      this.frames.push(this.frame);
      this.framesCounter++;
      this.frame = [];
    } else if (this.frame.length === 2) {
      this.frames.push(this.frame);
      this.framesCounter++;
      this.frame = [];
    } else {
      this.frame;
    }
  }

  isStrike() {
    return this.frame.length === 1 && this.frame == 10;
  }

  isSpare() {
    return this.frame.length === 2 && this.frame[0] + this.frame[2] == 10;
  }

  // isSpare(pins) {
  //   return this.frame ===
  // }
}

module.exports = Frames;
