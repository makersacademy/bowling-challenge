class Frame {
  constructor() {
    this.frame = [];
  }

  addRolls(roll) {
    if (this.frame.length === 2) {
      return }
      this.frame.push(roll);
  }

  frameArr() {
    return this.frame;
  }

  sumRolls() {
    let raw_score = 0;
    this.frame.map((roll) => (raw_score += roll));
    return raw_score;
  }

  isStrike() {
    return this.frame[0] === 10 ? true : false;
  }

  isSpare() {
    return !this.frame.isStrike && ((this.frame[0] + this.frame[1] === 10))
      ? true
      : false;
  }
}

module.exports = Frame;
