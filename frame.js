class Frame {
  constructor(rollOne, rollTwo) {
    this.rollOne = rollOne;
    this.rollTwo = rollTwo;
  }
  
  getSum() {
    return this.rollOne + this.rollTwo;
  }

  strike() {
    if (this.rollOne === 10) {
      return true;
    }
    else {
      return false;
    }
  }
  
  spare() {
    if (!this.strike() && this.getSum() === 10) {
      return true;
    }
    else {
      return false;
    }
  }
}

module.exports = Frame;

