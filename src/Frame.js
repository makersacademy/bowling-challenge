class Frame {
  isSpare() {
    return this.total() === 10
  }
  total() {
    return this.roll1 + this.roll2;
  }
}
