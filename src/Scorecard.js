class Scorecard {
  constructor() {
    this.currentRoll = 1;
    this.currentFrame = 0;
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
      new Frame(),
    ];
  }

  record(score) {
    let frame = this.frames[this.currentFrame];
    let prev1 =
      this.currentFrame > 0 ? this.frames[this.currentFrame - 1] : false;
    let prev2 =
      this.currentFrame > 1 ? this.frames[this.currentFrame - 2] : false;

    if (this.currentRoll === 1) {
      frame.roll1 = score;
      this.assignSpareBonus(prev1, score);
      this.assignStrikeBonus(prev1, score);
      this.assignConsecutiveStrikeBonus(prev1, prev2, score);
      this.advance(score);
    } else {
      frame.roll2 = score;
      this.assignStrikeBonus(prev1, score);
      this.advance(score);
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

  advance(score) {
    if (this.currentRoll === 1) {
      if (score === 10) {
        this.currentFrame++;
      } else {
        this.currentRoll = 2;
      }
    } else {
      this.currentRoll = 1;
      this.currentFrame++;
    }
  }

  runningTotal(frame) {
    let total = 0;
    for (let i = 0; i <= frame; i++) {
      total += this.frames[i].total();
    }
    return total;
  }
}
