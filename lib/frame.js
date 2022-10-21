class Frame {
  constructor(firstRoll, secondRoll) {
    this.firstRoll = firstRoll;
    this.secondRoll = secondRoll;
    this.frame = [];
  }

  addRolls() {
    this.frame.push(this.firstRoll, this.secondRoll);
  }

  frameArr() {
    return this.frame;
  }

  sumRolls() {
    let raw_score = 0;
    this.frame.map((roll) => (raw_score += roll));
    return raw_score;
  }

  isSpare() {
    return this.firstRoll < 10 && this.firstRoll + this.secondRoll === 10
      ? true
      : false;
  }

  isStrike() {
    return this.firstRoll === 10 ? true : false;
  }
}

module.exports = Frame;
