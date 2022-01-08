class Bowling {
  constructor(rolls = []) {
    this.rolls = rolls;
    this.frame = 0;
  }

  roll(frameRolls) {
    if (this.frame === 10) this.reset();
    this.rolls.push(...frameRolls);
    this.frame++;
  }

  checkStrike(index) {
   return this.rolls[index] === 10 ? true : false;
  }

  checkSpare(index) {
    return this.rolls[index] + this.rolls[index + 1] === 10 ? true : false;
  }

  strikeBonusPoints(index) {
    if (!this.rolls[index + 1]) return 0; 
    return this.rolls[index + 1] + this.rolls[index + 2]
  }

  reset() {
    this.frame = 0;
    this.rolls = [];
  }
}

module.exports = Bowling;