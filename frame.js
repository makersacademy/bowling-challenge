class Frame {
  constructor() {
    this.pinsLog = [];
  }

  knocked_down_pins = (noOfPins) => {
    this.pinsLog.push(noOfPins);
  };

  isAStrike = () => {
    if (
      this.pinsLog.length == 1 &&
      this.pinsLog.reduce((a, b) => a + b, 0) == 10
    ) {
      return true;
    }
  };

  isASpare = () => {
    if (
      this.pinsLog.length == 2 &&
      this.pinsLog.reduce((a, b) => a + b, 0) == 10
    ) {
      return true;
    }
  };
}

module.exports = Frame;
