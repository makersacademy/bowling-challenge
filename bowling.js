class Bowling {
  constructor(rolls = [], frame = 1) {
    this.rolls = rolls;
    this.frame = frame;
  }

  roll(frameRolls) {
    if (this.frame > 10) this.reset();
    this.rolls.push(...frameRolls);
    this.frame++;
  }

  score() {
    let index = 0;
    let score = 0;
    for(let i = 1; i < this.frame; i++) {
      if (this.checkStrike(index)) {
        score += (10 + this.strikeBonusPoints(index));
      } else if (this.checkSpare(index)) {
        score += (10 + this.spareBonusPoints(index));
      } else {
        score += (this.rolls[index] + this.rolls[index + 1]);
      }
      this.checkStrike(index) ? index++ : index += 2;
    }
    return score;
  }

  checkStrike(index) {
   return this.rolls[index] === 10;
  }

  checkSpare(index) {
    return this.rolls[index] + this.rolls[index + 1] === 10;
  }

  strikeBonusPoints(index) {
    if (!this.rolls[index + 2]) return 0; 
    return this.rolls[index + 1] + this.rolls[index + 2];
  }

  spareBonusPoints(index) {
    if (!this.rolls[index + 2]) return 0; 
    return this.rolls[index + 2];
  }

  reset() {
    this.frame = 1;
    this.rolls = [];
  }
}

module.exports = Bowling;
