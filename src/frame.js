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
    if(this._countRolls() < 2 && this._totalPins() < 10) {
      return false;
    } else if(this._hasThirdRoll()) {
      return false;
    }
    return true;
  }

  _validateRoll(roll) {
    if(this.isComplete()) {
      throw "Invalid roll for this frame";
    }else if(this._countRolls() === 1 && this.rolls[0].pins + roll.pins > 10 && !this._isStrike()) {
      throw "Invalid roll for this frame";
    }
  }

  _countRolls() {
    return this.rolls.length;
  }

  _totalPins() {
    return this.rolls.reduce((sum, roll) => sum + roll.pins, 0);
  }

  _isSpare() {
    return (this._countRolls() === 2 && this._totalPins() === 10);
  }

  _isStrike() {
    return this.rolls[0].pins === 10;
  }

  _hasThirdRoll() {
    return (this._isTenthFrame() &&
      (this._isSpare() || this._isStrike() && this._countRolls() < 3));
  }

  _isTenthFrame() {
    return this.number === 10;
  }
}
