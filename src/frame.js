class Frame {

  constructor(number) {
    this.number = number;
    this.rolls = [];
  }

  addRoll(roll) {
    this._validateRoll(roll)
    this.rolls.push(roll)
  }

  isComplete() {
    if (this._countRolls() < 2 && this._totalPins() < 10) {
      return false;
    } else if (this._hasThirdRoll()) {
      return false;
    }
    return true;
  }

  scoreFrame(nextFrame, nextNextFrame) {
    if (!this.isComplete()) { return false; }
    let bonus = this._calculateBonus(nextFrame, nextNextFrame);
    if (bonus === false) { return false; }
    return this._totalPins() + bonus;
  }

  _validateRoll(roll) {
    if (this.isComplete()) {
      throw "Invalid roll for this frame";
    } else if (this._countRolls() === 1 && this._firstRollPins() + roll.pins > 10 && !this._isStrike()) {
      throw "Invalid roll for this frame";
    }
  }

  _countRolls() {
    return this.rolls.length;
  }

  _totalPins() {
    return this.rolls.reduce((sum, roll) => sum + roll.pins, 0);
  }

  _firstRollPins() {
    return this.rolls[0].pins;
  }

  _isSpare() {
    return (this._countRolls() === 2 && this._totalPins() === 10);
  }

  _isStrike() {
    return this._firstRollPins() === 10;
  }

  _hasThirdRoll() {
    return (this._isTenthFrame() &&
      (this._isSpare() || this._isStrike() && this._countRolls() < 3));
  }

  _calculateBonus(nextFrame, nextNextFrame) {
  if (this._isSpare()) { return this._spareBonus(nextFrame); }
  if (this._isStrike()) { return this._strikeBonus(nextFrame, nextNextFrame); }
  return 0;
  }

  _spareBonus(nextFrame) {
    if (nextFrame === undefined || nextFrame._countRolls() < 1) { return false; }
    return nextFrame._firstRollPins();
  }

  _strikeBonus(nextFrame, nextNextFrame) {
    let nextRolls = [];
    if (nextFrame !== undefined && nextNextFrame !== undefined) {
      nextRolls = nextFrame.rolls.concat(nextNextFrame.rolls);
    } else if (nextFrame !== undefined) {
      nextRolls = nextFrame.rolls
    }
    return (nextRolls.length >= 2 ? (nextRolls[0].pins + nextRolls[1].pins) : false);
  }

  _isTenthFrame() {
    return this.number === 10;
  }
}
