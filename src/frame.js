class Frame {
  constructor() {
    this.rolls = [];
  }

  roll = (pinsKnocked) => {
    this.rolls.push(pinsKnocked);
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
}
