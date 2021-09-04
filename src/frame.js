class Frame {
  constructor() {
    this.firstRoll = null;
    this.secondRoll = null;
  }

  addRoll(roll) {
    this.firstRoll ? this.secondRoll = roll : this.firstRoll = roll
  }
}
