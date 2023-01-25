class Frame {
  constructor(first, second, third) {
    this.first = first;
    this.second = second;
    this.third = third;
  }

  getFirst() {
    return this.first;
  }

  getSecond() {
    return this.second;
  }

  getThird() {
    return this.third;
  }

  isStrike() {
    if (this.first === 10) {
      return true;
    } else {
      return false;
    }
  }

  isSpare() {
    if (this.first !== 10 && this.first + this.second === 10) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Frame;
