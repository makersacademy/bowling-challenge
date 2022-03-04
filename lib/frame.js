class Frame {

  constructor() {
    this.rolls = [];
  }

  logRoll(pinsDowned) {
    this.rolls.push(pinsDowned);
  }

  sumFrame() {
    return this.rolls.reduce((sum, roll) => sum + roll, 0);
  }

  allRolls() {
    return this.rolls;
  }

  frameComplete() {
    return (this.rolls.length > 1 || this.strikeFrame() == true ? true : false )
  }

  strikeFrame() {
    return (this.rolls[0] == 10 ? true : false)
  }

  spareFrame() {
    return (this.rolls[0] + this.rolls[1] == 10 ? true : false)
  }

  openFrame() {
    return (this.spareFrame() == false && this.strikeFrame() == false ? true : false)
  }
}

module.exports = Frame;
