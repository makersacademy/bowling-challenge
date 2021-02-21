class Frame {
  constructor() {
    this.rolls = [];
    this.bonusRolls = [];
    this.bonusRollsRemaining = 0;
  }

  store(int) {
    this.validateRoll(int);
    if (this.isComplete()) {
      throw new Error('All rolls and bonuses already recorded');
    }
    if (this.isFull()) {
      this.bonusRolls.push(int);
      this.bonusRollsRemaining--;
      return;
    }
    if (this.rolls.length === 1) {
      this.validateSecondRoll(int);
    }
    this.rolls.push(int);
    this.setBonus();
  }

  isComplete() {
    return this.isFull() && this.bonusRollsRemaining <= 0;
  }

  isFull() {
    return this.rolls.length >= 2 || this.getRollsTotal() === 10;
  }

  getRollsTotal() {
    let rollsTotal = this.rolls.reduce((a, b) => a + b, 0);
    return rollsTotal;
  }

  getBonusTotal() {
    let bonusTotal = this.bonusRolls.reduce((a, b) => a + b, 0);
    return bonusTotal;
  }

  getTotal() {
    return this.getRollsTotal() + this.getBonusTotal();
  }

  validateRoll(int) {
    if (int > 10 || int < 0) {
      throw new Error('Invalid score: please enter a number from 0 to 10');
    }
  }

  validateSecondRoll(int) {
    if (this.getRollsTotal() + int > 10) {
      throw new Error('Total score for rolled balls cannot exceed 10');
    }
  }

  setBonus() {
    if (this.rolls.length === 1 && this.getRollsTotal() === 10) {
      this.bonusRollsRemaining = 2;
    } else if (this.rolls.length === 2 && this.getRollsTotal() === 10) {
      this.bonusRollsRemaining = 1;
    }
  }
}

// module.exports = Frame;
