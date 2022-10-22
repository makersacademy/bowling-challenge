class Frame {
  constructor(index) {
    this.index = index;
    this.rollOne = 0;
    this.rollTwo = 0;
    this.total = 0;
  }
  
  getRollOne(rollOne) {
    this.rollOne = rollOne;
    return this.rollOne;
  }

  getRollTwo(rollTwo) {
    this.rollTwo = rollTwo;
    return this.rollTwo;
  }

  score() {
    this.total = this.rollOne + this.rollTwo;
    return this.total;
  }

  strike() {
    if (this.rollOne === 10) {
      return true;
    }
  }
  
  spare() {
    if (this.total === 10) {
      return true;
    }
  }
}

module.exports = Frame;

