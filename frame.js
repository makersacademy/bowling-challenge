class Frame {
  constructor() {
    this.pinsLog = [];
    this.score = 0;
    this.bonusPoints = 0;
  }

  knocked_down_pins = (noOfPins) => {
    this.pinsLog.push(noOfPins);
  };

  isAStrike = () => {
    if (
      this.pinsLog.length == 1 &&
      this.pinsLog.reduce((a, b) => a + b, 0) == 10
    )
      return true;
  };

  isASpare = () => {
    if (
      this.pinsLog.length == 2 &&
      this.pinsLog.reduce((a, b) => a + b, 0) == 10
    )
      return true;
  };

  addScore = () => {
    this.addBonusRolls();
    this.score = this.pinsLog.reduce((a, b) => a + b, 0);
    return this.score;
  };

  isComplete = () => {
    if (this.pinsLog.length == 2 || this.isAStrike()) return true;
  };

  addBonusRolls = () => {
    if (this.isASpare()) return (this.bonusPoints = 1);
    if (this.isAStrike()) return (this.bonusPoints = 2);
  };

  addBonusPoints = (bonusPoints) => {
    this.pinsLog.push(bonusPoints);
  };
}

module.exports = Frame;
