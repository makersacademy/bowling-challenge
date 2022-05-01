class Frame {
  constructor() {
    this.pinsLog = [];
    this.score = null;
    this.bonusRolls = 0;
    this.bonusPinsLog = [];
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
    this.combineScore = this.pinsLog.concat(this.bonusPinsLog);
    this.score = this.combineScore.reduce((a, b) => a + b, 0);
    return this.score;
  };

  isComplete = () => {
    if (this.pinsLog.length == 2 || this.isAStrike()) return true;
  };

  addBonusRolls = () => {
    if (this.isASpare()) return (this.bonusRolls = 1);
    if (this.isAStrike()) return (this.bonusRolls = 2);
  };

  addBonusPoints = (bonusPoints) => {
    this.bonusPinsLog.push(bonusPoints);
  };

  resetBonusPinsLog = () => {
    this.bonusPinsLog = [];
  };
}

module.exports = Frame;
