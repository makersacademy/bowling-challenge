class Frame {

  constructor() {
    this.pinsLeft = 10
    this.rolls = []
    this.MAXROLLSPERFRAME = 2
  }

  roll(pinsKnockedDown) {
    if (this.isInputInvalid(pinsKnockedDown)) {
      return;
    }
    this.pinsLeft -= pinsKnockedDown
    this.addRoll(pinsKnockedDown)
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
    return this.rolls.length === this.MAXROLLSPERFRAME
  }

  isInputInvalid(pinsKnockedDown) {
    return this.pinsLeft < pinsKnockedDown
  }

};
