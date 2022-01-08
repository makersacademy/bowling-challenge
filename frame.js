class Frame {

  constructor() {
    this.rolls = [];
    this.maxRolls = 2;
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  getRolls() {
    return [...this.rolls];
  }

  getTotal() {
    return this.getRolls().reduce((previousValue, currentValue) => previousValue + currentValue);
  }

  isStrike() {
    return this.getRolls()[0] === 10;
  }

  isSpare() {
    return this.getTotal() === 10 && this.numberOfRolls() === this.maxRolls;
  }

  numberOfRolls() {
    return this.getRolls().length;
  }

  isComplete() {
    return this.numberOfRolls() === this.maxRolls || this.isStrike();
  }

}

frame = new Frame();


module.exports = Frame;