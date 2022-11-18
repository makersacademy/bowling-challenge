class Frame {
  constructor() {
    this.roll1 = 0;
    this.roll2 = 0;
    this.roll3 = 0;
    this.total = 0;
  }

  getRoll1() {
    return this.roll1;
  }

  getRoll2() {
    return this.roll2;
  }

  getRoll3() {
    return this.roll3;
  }

  getTotal() {
    return this.total;
  }

  setRoll1(score) {
    this.roll1 = score;
  }

  setRoll2(score) {
    this.roll2 = score;
  }

  setRoll3(score) {
    this.roll3 = score;
  }

  addToTotal(score) {
    this.total += score
  }
}

module.exports = Frame;
