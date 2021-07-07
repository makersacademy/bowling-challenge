module.exports = class Frame {
  constructor() {
    this.FRAME_PINS = 10;
    this.FRAME_ROLLS = 2;
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  firstRoll() {
    return this.rolls[0];
  }

  secondRoll() {
    return this.rolls[1];
  }

  firstTwoRolls() {
    return this.firstRoll() + this.secondRoll();
  }

  frameScore() {
    return this.rolls.reduce((previous, current) => previous + current, 0);
  }

  isStrike() {
    return this.frameScore() == 10 && this.rolls.length === 1;
  }

  isSpare() {
    return this.frameScore() == 10 && this.rolls.length === 2;
  }

  isClosed(isFinalFrameInput) {
    if (isFinalFrameInput && this.rolls.length < 3) {
      return false;
    } else if (isFinalFrameInput && this.rolls.length === 3) {
      return true;
    }

    return (
      this.rolls.length === 2 || (this.rolls.length === 1 && this.isStrike())
    );
  }
};
