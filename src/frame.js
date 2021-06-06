class Frame {
  constructor() {
    this.rolls = [];
    this.total = 0;
  }

  roll = (pinsKnocked) => {
    this.rolls.push(pinsKnocked);
    this.total += pinsKnocked;
  };

  isStrike = () => {
    return this.rolls[0] == 10;
  };

  isSpare = () => {
    return this.scoreRolls() == 10 && this.rolls.length == 2;
  };

  scoreRolls = () => {
    return this.rolls.reduce((x, y) => x + y, 0);
  };

  addBonus = (bonus) => {
    this.total += bonus;
  };
}
