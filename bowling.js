const reducer = (previousValue, currentValue) => previousValue + currentValue;

class Bowling {
  constructor() {
    this.rolls = new Array();
  }

  score() {
    let result = 0;
    let rollIndex = 0;
    for (let i = 0; i < 10; i++) {
      if (this.rolls[rollIndex] === 10) {
        result += (this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2]);
        rollIndex += 1;
      } else if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10) {
        result += (this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2]);
        rollIndex += 2;
      } else {
        result += (this.rolls[rollIndex] += this.rolls[rollIndex + 1]);
        rollIndex += 2;
      }
    }
    // this.rolls.reduce(reducer); original method using reducer const
    return result;
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  // spare(rollIndex) {
  //   return ((this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10) ? true : false);
  // }

  // spareScore(rollIndex) {
  //   result += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  // }
}

module.exports = Bowling;
