class Frame {
  constructor(roll1, roll2 = 0) {
    this.roll1 = roll1;
    this.roll2 = roll2;
    this.frameScore = this.roll1 + this.roll2;
  }
}
