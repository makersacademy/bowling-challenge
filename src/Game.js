class Game {

  constructor() {
    this.frames = []
  }

  roll(pinsKnockedDown) {
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
    return this.frames.length === 0 || this.frames[this.frames.length -1].rolls.length === 2
  }

  addRollToExistingFrame(pinsKnockedDown) {
    var frame = this.frames[this.frames.length -1]
    frame.roll(pinsKnockedDown)
  }

};
