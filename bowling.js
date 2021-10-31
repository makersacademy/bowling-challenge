const reducer = (previousValue, currentValue) => previousValue + currentValue;

class Bowling {
  constructor() {
    this.rolls = new Array();
    this.result = 0
  }

  score() {
    // let result = 0;
    let rollIndex = 0;
    for (let i = 0; i < 10; i++) {
      if (this.IsAStrike(rollIndex)) {
        this.strikeScore(rollIndex);
        rollIndex += 1;
      } else if (this.IsASpare(rollIndex)) {
        this.spareScore(rollIndex);
        rollIndex += 2;
      } else {
        this.frameScore(rollIndex);
        rollIndex += 2;
      }
    }
    // this.rolls.reduce(reducer); original method using reducer const
    return this.result;
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  IsASpare(rollIndex) {
    return ((this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10) ? true : false);
  }

  spareScore(rollIndex) {
    this.result += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }

  IsAStrike(rollIndex) {
    return ((this.rolls[rollIndex] === 10) ? true : false);
  }

  strikeScore(rollIndex) {
    this.result += (this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2]);
  }

  frameScore(rollIndex) {
    this.result += (this.rolls[rollIndex] += this.rolls[rollIndex + 1])
  }

}

module.exports = Bowling;
