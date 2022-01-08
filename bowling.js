class Bowling {
  constructor(rolls = []) {
    this.rolls = rolls;
    this.frame = 0;
  }

  roll(frameRolls) {
    this.rolls.push(...frameRolls);
    this.frame = 1;
  }
}

module.exports = Bowling;