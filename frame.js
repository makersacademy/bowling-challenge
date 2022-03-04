class Frame {
  constructor() {
    this.rollCounter = 1
    this.rolls = []
  }

  getRollCounter() {
    return this.rollCounter;
  }
  addRoll() {
    this.rollCounter++;
  }
  minusRoll() {
    this.rollCounter--;
  }
  getRolls() {
    return this.rolls;
  }
  addPins(pins) {
    if((pins) > 10) {
      throw 'You wish!';
    } else if((pins) < 0) {
      throw 'Pas possible';
    }
    return this.rolls.push(pins);
  }
  isStrike() {
    return this.rolls[0] === 10;
  }
  isSpare() {
    return this.rolls.reduce((roll_one, roll_two) => roll_one + roll_two) === 10 & !this.isStrike();
  }
  getTotal() {
    return this.rolls.reduce((roll_one, roll_two) => roll_one + roll_two);
  }
}

module.exports = Frame
