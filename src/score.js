class Score {
  constructor () {
    this.bonusScore = 0;
    this.bonusScorePrevious = 0;
    this.bonus = 0;
  }

  saveRoll (roll1, roll2, bonus) {
    this.bonus = bonus;
    this.roll1 = roll1;
    this.roll2 = roll2;
  }

  calculateBonus (roll1, roll2) {
    if (roll2 !== null) {
      this.calculateBonus2Rolls(roll1, roll2);
    } else {
      this.calculateBonus1Roll(roll1);
    }
  }

  calculateBonus2Rolls (roll1, roll2) {
    if (this.bonus === 1) {
      this.bonusScore = roll1;
    } else {
      this.bonusScore = (roll1 + roll2);
    }
    this.addBonus = false;
  }

  calculateBonus1Roll (roll1) {
    this.bonusScore = roll1;
    if (this.bonus === 1) {
      this.addBonus = false;
    } else {
      this.addBonus = true;
    }
  }

  calcPreviousBonus (roll1, roll2) {
    if (this.addBonus === true) {
      this.bonusScorePrevious = roll1;
    }
    if (this.bonus !== 0) {
      this.calculateBonus(roll1, roll2);
    } else {
      this.bonusScore = 0;
    }
  }

  calculate (roll1, roll2, bonus) {
    this.calcPreviousBonus(roll1, roll2);
    this.saveRoll(roll1, roll2, bonus);
    let score;
    roll2 === null ? score = roll1 : score = (roll1 + roll2);
    return [score, this.bonusScore, this.bonusScorePrevious];
  }

  calculateFrame10 (roll1, roll2, roll3) {
    this.calcPreviousBonus(roll1, roll2);
    let score;
    roll3 === null ? score = (roll1 + roll2) : score = (roll1 + roll2 + roll3);
    return [score, this.bonusScore, this.bonusScorePrevious];
  }
}
