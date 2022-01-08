class Bowling {
  constructor(rolls = []) {
    this.rolls = rolls;
    this.frame = 0;
  }

  roll(frameRolls) {
    if (this.frame === 10) this.reset();
    this.rolls.push(...frameRolls);
    this.frame = 1;
  }

  checkStrike(index) {
   return this.rolls[index] === 10 ? true : false;
  }

  reset() {
    this.frame = 0;
    this.rolls = [];
  }
}

module.exports = Bowling;