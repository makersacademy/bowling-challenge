class Frame {

  constructor(number) {
    this.number = number;
    this.rolls = [];
    this.maxRolls = 2;
    this.isStrike = false;
    this.isSpare = false;
    this.bonusRolls = 0;
  }

  getScore() {
    return this.rolls.reduce((a, b) => {return a + b}, 0);
  }

  roll(numberOfPins) {
    if (this.isComplete()) {throw "No more rolls for this frame";}
    this.rolls.push(numberOfPins);
    if (this.getScore() === 10 && this.maxRolls === 2) {
      this.rolls.length === 1 ? this.strikeRoll() : this.spareRoll();
    }
  }

  spareRoll() {
    this.isSpare = true;
    this.number === 10 ? this.maxRolls = 3 : this.bonusRolls = 1;
  }

  strikeRoll() {
    this.isStrike = true;
    this.rolls.push(0)
    this.number === 10 ? this.maxRolls = 4 : this.bonusRolls = 2;
  }

  isComplete() {
    return this.rolls.length === this.maxRolls;
  }
}

module.exports = Frame;
