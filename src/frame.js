class FrameNotTen {
  constructor(frameNumber, rollsWithBonus) {
    this.frameNumber = frameNumber;
    this.rollsWithBonus = Number(rollsWithBonus);
    this.frameScore = [];
    this.frameBonus = [];
  }

  _addRollAndReturnBonusForPrevFrames(pins) {
    this.checkForErrors(pins);
    if (this.frameNumber != 10 || this.frameScore.length == 0)
      this.frameScore = this.frameScore.concat([parseInt(pins)]);
    else if (
      this.frameNumber == 10 ||
      (this.frameScore.length > 1 && this.frameScore[0] != 10)
    )
      this.frameScore = this.frameScore.concat([parseInt(pins)]);
    if (this.frameScore.length <= 2)
      return {
        bonusPrevFrames: this.sendBonusToPreviousFrames(pins),
        bonusFutureRolls: this.rollsWithBonus,
      };
    else
      return {
        bonusPrevFrames: [],
        bonusFutureRolls: 0,
      };
  }

  checkForErrors(pins) {
    if (isNaN(pins)) this.shouldThrowError("argument should be a number");
    if (pins < 0) this.shouldThrowError("argument should be greater than 0");
    if (this.frameEnded()) this.shouldThrowError("this frame has eneded");
    if (this.tooManyPins(pins) && this.frameNumber != 10)
      this.shouldThrowError("argument + score > 10");
  }

  frameEnded() {
    if (this.frameNumber != 10 && this.frameScore.length >= 2) return true;
    else if (this.frameNumber != 10 && this.frameScore[0] === 10) return true;
    else if (
      this.frameNumber == 10 &&
      this.frameScore.length >= 3 &&
      this.frameScore[0] == 10
    )
      return true;
    else if (
      this.frameNumber == 10 &&
      this.frameScore.length >= 3 &&
      this.frameScore[0] + this.frameScore[1] == 10
    )
      return true;
    else if (
      this.frameScore.length >= 2 &&
      this.frameNumber == 10 &&
      this.frameScore[0] + this.frameScore[1] < 10
    )
      return true;
    else return false;
  }

  tooManyPins(pins) {
    if (this.frameScore.reduce((a, b) => a + b, 0) + pins > 10) return true;
    else return false;
  }

  points(what) {
    if (what === "score")
      return this.frameScore.concat([0]).reduce((a, b) => a + b, 0);
    if (what === "bonus")
      return this.frameBonus.concat([0]).reduce((a, b) => a + b, 0);
    return this.frameScore
      .concat([0])
      .concat(this.frameBonus)
      .reduce((a, b) => a + b, 0);
  }

  addBonusSentFromFutureRolls(bonusPoints) {
    if (this.frameBonus.length >= 2) return false;
    this.frameBonus = this.frameBonus.concat([bonusPoints]);
  }

  setFutureRollsWithBonus() {
    if (this.frameScore.length == 1 && this.points("score") == 10)
      if (this.rollsWithBonus == 1.1 || this.rollsWithBonus == 1.2)
        this.rollsWithBonus = 2.2;
      else this.rollsWithBonus = 2.1; //Strike
    if (this.frameScore.length == 2 && this.points("score") == 10)
      this.rollsWithBonus = 1; // Spare
  }

  sendBonusToPreviousFrames(pins) {
    let bonusArray = [];
    if (this.rollsWithBonus >= 1) bonusArray = bonusArray.concat([pins]);
    this.rollsWithBonus = Number((Number(this.rollsWithBonus) - 1).toFixed(1));
    if (this.rollsWithBonus == 1.2) bonusArray = [pins].concat(bonusArray);
    this.setFutureRollsWithBonus();
    return bonusArray;
  }

  shouldThrowError(err) {
    throw err;
  }
}
