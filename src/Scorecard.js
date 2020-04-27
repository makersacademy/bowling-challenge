class Scorecard {
  constructor() {
    this.currentRoll = 1;
    this.frame = 0;
    this.frames = [
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame10(),
    ];
    this.DEFAULT_AVAILABLE_ROLLS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.currentAvailableRolls = this.DEFAULT_AVAILABLE_ROLLS;
  }

  record(score) {
    if (this.gameOver()) {
      throw "The game is over";
    }
    if (!this.currentAvailableRolls.includes(score)) {
      throw "Over total of 10 for frame";
    }
    let frame = this.frames[this.frame];
    let prev1 = this.frame > 0 ? this.frames[this.frame - 1] : false;
    let prev2 = this.frame > 1 ? this.frames[this.frame - 2] : false;

    this.prepareAvailableRolls(score);

    if (this.currentRoll === 1) {
      frame.roll1 = score;
      this.assignSpareBonus(prev1, score);
      this.assignConsecutiveStrikeBonus(prev1, prev2, score);
      this.assignStrikeBonus(prev1, score);
    } else if (this.currentRoll === 2) {
      frame.roll2 = score;
      this.assignStrikeBonus(prev1, score);
    } else if (this.currentRoll === 3) {
      frame.roll3 = score;
    }
    this.advance(frame);
  }

  prepareAvailableRolls(score) {
    if (this.currentRoll === 1 && score != 10) {
      this.currentAvailableRolls = [...this.DEFAULT_AVAILABLE_ROLLS];
      this.currentAvailableRolls.splice(11 - score, score);
      } else {
      this.currentAvailableRolls = [...this.DEFAULT_AVAILABLE_ROLLS];
    }
  }

  assignConsecutiveStrikeBonus(prev1, prev2, score) {
    if (
      prev1 != false &&
      prev1.isStrike() &&
      prev2 != false &&
      prev2.isStrike()
    ) {
      prev2.strikeBonus += score;
    }
  }

  assignStrikeBonus(prev1, score) {
    if (prev1 != false && prev1.isStrike()) {
      prev1.strikeBonus += score;
    }
  }

  assignSpareBonus(prev1, score) {
    if (prev1 != false && prev1.isSpare()) {
      prev1.spareBonus = score;
    }
  }

  advance(frame) {
    if (frame.isComplete()) {
      this.frame++
      this.currentRoll = 1
    } else {
      this.currentRoll++
    }
  }

  runningTotal(frame) {
    let total = 0;
    for (let i = 0; i <= frame; i++) {
      total += this.frames[i].total();
    }
    return total;
  }

  gameOver() {
    return this.frames[9].isComplete();
  }
}
