class Frame {

  constructor() {
    this.rolls = [];
    this.scoringRolls = [];
    this.maxRolls = 2;
    this.bonus = 0;
    this.extra = false;
  }

  roll(pins) {
    this.rolls.push(pins);
    this.scoringRolls.push(pins);
  }

  nonScoringRoll(pins) {
    this.rolls.push(pins);
  }

  getRolls() {
    return [...this.rolls];
  }

  getScoringRolls() {
    return [...this.scoringRolls];
  }

  getTotal() {
    return this.getRolls().reduce((previousValue, currentValue) => previousValue + currentValue);
  }

  getScore() {
    return this.getScoringRolls().reduce((previousValue, currentValue) =>  previousValue + currentValue);
  }

  isStrike() {
    return this.getRolls()[0] === 10;
  }

  isSpare() {
    return this.getTotal() === 10 && this.numberOfRolls() === this.maxRolls;
  }

  numberOfRolls() {
    return this.getRolls().length;
  }

  isComplete() {
    return this.numberOfRolls() === this.maxRolls || (this.isStrike() && !this.isExtra());
  }

  addBonus(points) {
    this.bonus += points;
  }

  getBonus() {
    return this.bonus;
  }

  addExtraRoll() {
    if (this.maxRolls < 3) {
      this.maxRolls++;
      this.extra = true;
    }
  }

  isExtra() {
    return this.extra;
  }

}

frame = new Frame();


module.exports = Frame;