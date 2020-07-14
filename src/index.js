class Card {
  constructor() {
    this.frames = [];
    this.frameCount = 0;
    this.rollCount = 1;
    this.markDebt = [];
    for (let i = 0; i < 10; i += 1) {
      this.frames.push(new Frame());
    }
  }

  addRollScore(roll) {
    this.frames[this.frameCount].addRoll(roll);
    this.adjustRollCount(roll);
    if (this.frameCount > 0) {
      this.checkBonus(roll);
    }
  }

  checkBonus(roll) {
    const old = this.frameCount - 1;
    const oldFrame = this.frames[old];
    if (oldFrame.mark !== 'none') {
      oldFrame.addBonus1(roll);
    }
  }

  adjustRollCount(roll) {
    if (roll === 10) {
      this.frameCount += 1;
    } else {
      this.rollCount += 1;
      if (this.rollCount === 3) {
        this.frameCount += 1;
        this.rollCount = 1;
      }
    }
  }
}
