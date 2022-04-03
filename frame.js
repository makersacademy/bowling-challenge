class Frame {
  constructor(rollOne, rollTwo = 0) {
    this.rollOne = rollOne;
    this.rollTwo = rollTwo;
    this.frameTotal = rollOne + rollTwo;
  };
};

module.exports = Frame;