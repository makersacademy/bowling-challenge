class Frame {
  constructor(rollOne, rollTwo) {
    this.rollOne = rollOne;
    this.rollTwo = rollTwo;
  }
  
  getFrameSum() {
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
    if (!this.strike() && this.getFrameSum() === 10) {
      return true;
    }
    else {
      return false;
    }
  }
}

module.exports = Frame;

