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

  getTotal() {
    return this.first + this.second + this.third;
  }
  isStrike() {
    return this.first === 10;
  }

  isSpare() {
    return this.first !== 10 && this.first + this.second === 10;
  }
}

module.exports = Frame;
