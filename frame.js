class Frame {
  constructor() {
    this.pins = [];
    this.bonusRolls = 0;
    this.total = 0;
  }

  addPins(pins) {
    this.pins.push(pins);
  }

  isStrike() {
    return this.pins[0] === 10;
  }

  isSpare() {
    return this.pins[0] + this.pins[1] === 10;
  }

  calculateBonus() {
    if (this.isSpare()) {
      this.bonusRolls = 1;
    } else if (this.isStrike()) {
      this.bonusRolls = 2;
    } else {
      this.bonusRolls = 0;
    }
  }

  hasActiveBonus() {
    return this.bonusRolls > 0;
  }

  deductBonusRoll() {
    this.bonusRolls--;
  }

  calculateTotal() {
    this.total = this.pins.reduce((sum, pins) => sum + pins, 0);
  }

  updateTotal(number) {
    this.total += number;
  }

  isComplete() {
    return this.pins.length === 2 || this.isStrike();
  }
}

class FinalFrame extends Frame {
  isComplete() {
    if (this.pins.length === 3) {
      return true;
    } else if (this.pins.length === 2 && !this.isStrike() && !this.isSpare()) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = {
  Frame: Frame,
  FinalFrame: FinalFrame,
};
