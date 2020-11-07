class Frame {

  constructor() {
    this.pinsLeft = 10
    this.rolls = []
    this.MAX_ROLLS_PER_FRAME = 2
    this.frame_score = 0
  }

  roll(pinsKnockedDown) {
    if (this.isInputInvalid(pinsKnockedDown)) {
      return;
    }
    this.addRoll(pinsKnockedDown)
    this.pinsLeft -= pinsKnockedDown
    this.frame_score = 10 - this.pinsLeft
  }

  addRoll(pinsKnockedDown) {
    if (this.isMaxRollsInFrame()) {
      return;
    }
    if (this.pinsLeft < pinsKnockedDown) {
      return;
    }
    var roll = new Roll(pinsKnockedDown);
    this.rolls.push(roll);
  }

  isMaxRollsInFrame() {
    return this.rolls.length === this.MAX_ROLLS_PER_FRAME
  }

  isInputInvalid(pinsKnockedDown) {
    return this.pinsLeft < pinsKnockedDown
  }

};
