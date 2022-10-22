class Frame {
  constructor() {
    this.frameArray = [];
  }

  addRolls(roll) {
    if (this.isComplete()) {
      return;
    }
    this.frameArray.push(roll);
  }

  frameArr() {
    return this.frameArray;
  }

  sumRolls() {
    let sum = 0;
    this.frameArray.map((roll) => (sum += roll));
    return sum;
  }

  isStrike() {
    return this.frameArray[0] === 10;
  }

  isSpare() {
    return !this.isStrike() && this.sumRolls() === 10;
  }

  isComplete() {
    return this.isStrike() || this.frameArray.length === 2;
  }

  firstRoll() {
    return this.frameArray[0]
  }
}

module.exports = Frame;
