class Game {

  constructor() {
    this.frames = []
  }

  roll(pinsKnockedDown) {
    if (this.normal_end()) {
      return;
    }
    if (this.spare_in_10th()) {
      return;
    }
    if (this.isNewFrameNeeded()) {
      this.addFrame(pinsKnockedDown);
    } else {
    this.addRollToExistingFrame(pinsKnockedDown)
    }
  }

  addFrame(pinsKnockedDown) {
    var frame = new Frame();
    frame.roll(pinsKnockedDown)
    this.frames.push(frame);
  }
  isNewFrameNeeded() {
    return this.frames.length == 0 || this.frames[this.frames.length -1].rolls.length == 2 || this.wasStrike()
  }

  addRollToExistingFrame(pinsKnockedDown) {
    var frame = this.frames[this.frames.length -1]
    frame.roll(pinsKnockedDown)
  }

  wasStrike() {
    return this.frames[this.frames.length -1].strike
  }

  normal_end() {
    return this.frames.length == 10 && this.frames[this.frames.length -1].rolls.length == 2 && this.frames[this.frames.length -1].pinsLeft != 0
  }

  spare_in_10th() {
    return this.frames.length == 11 && this.frames[this.frames.length -1].rolls.length == 1 && this.frames[9].spare
  }

};
