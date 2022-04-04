class Bowling {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    let total = 0;
    let turn = 0;
    for(let i = 0 ; i < 10 ; i++) {
      const frameScore = this.rolls[turn] + this.rolls[turn + 1];
      if (this.rolls[turn] === 10) {
        total += this.spareOrStrikeBonus(turn);
        turn++;
      } else if (frameScore === 10) {
        total += this.spareOrStrikeBonus(turn);
        turn += 2;
      } else {
        total += frameScore;
        turn += 2;
      }
    }
    return total;
  }

  spareOrStrikeBonus(turn) {
    return this.rolls[turn] + this.rolls[turn + 1] + this.rolls[turn + 2];
  } // the same logic applies to the bonus whether it's a spare or strike,
    // the difference is whether the turn increments by 1 or 2 in the score() function

}

module.exports = Bowling;