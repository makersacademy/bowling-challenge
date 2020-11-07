class Frame {

  constructor() {
    this.pinsLeft = 10
    this.rolls = []
    this.MAXROLLSPERFRAME = 2
  }

  roll(pinsKnockedDown) {
    this.pinsLeft -= pinsKnockedDown
    this.addRoll()
  }

  addRoll(pinsKnockedDown) {
    if (this.isMaxRollsInFrame()) {
      return;
    }
    var roll = new Roll(pinsKnockedDown);
    this.rolls.push(roll);
  }

  isMaxRollsInFrame() {
    return this.rolls.length === this.MAXROLLSPERFRAME
  }

};
