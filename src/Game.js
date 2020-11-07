class Game {

  constructor() {
    this.frames = []
  }

  roll(pinsKnockedDown) {
    if (this.gameOver()){
      return
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

  normalGameEnd() {
    return this.frames.length == 10 && this.frames[this.frames.length -1].rolls.length == 2 && this.frames[this.frames.length -1].pinsLeft != 0
  }

  spare_in_10th() {
    return this.frames.length == 11 && this.frames[this.frames.length -1].rolls.length == 1 && this.frames[9].spare
  }

  endAfterThreeStrikes() {
    return this.frames.length == 12
  }

  gameOver(){
    return (this.endAfterThreeStrikes() || this.normalGameEnd() || this.spare_in_10th())
  }
};
