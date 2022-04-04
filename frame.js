class Frame {
  constructor(round = 1) {
    this.points = 0;
    this.round = round;
    this.rollOne = null;
    this.rollTwo = null;
    this.rollThree = null;
    this.complete = false;
  };

  roll(pins) {
    if (this.complete) throw "It's over! Stop lobbing the balls!";
  
    if (this.rollOne === null) {
      this.firstGo(pins);
    } else if (this.round < 10 && this.rollTwo === null) {
      this.secondGo(pins);
    } else if (this.rollTwo === null) {
      this.secondGoRound10(pins);
    } else {
      this.thirdGo(pins);
    }
  }

  strike() {
    return this.rollOne === 10;
  }
  
  spare() {
    return this.rollOne !== 10 && this.rollOne + this.rollTwo === 10;
  }

  firstGo(pins) {
    this.rollOne = pins;
    if (pins === 10 && this.round < 10) {
      this.complete = true;
    };
    this.frameTotal();
  };

  secondGo(pins) {
    this.rollTwo = pins;
    this.complete = true;
    this.frameTotal();
  };

  secondGoRound10(pins) {
    this.rollTwo = pins;
    if (this.rollOne + this.rollTwo < 10) {
      this.complete = true;
    }
    this.frameTotal();
  }

  thirdGo(pins) {
    this.rollThree = pins;
    this.complete = true;
    this.frameTotal();
  };

  frameTotal() {
    if (this.rollOne !== null) this.points = this.rollOne;
    if (this.rollTwo !== null) this.points += this.rollTwo;
    if (this.rollThree !== null) this.points += this.rollThree;
    return this.points;
  };
};


module.exports = Frame;