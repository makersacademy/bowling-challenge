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

  roll(roll) {
    if (this.frameCount > 0) {
      this.checkBonus(roll);
    }
    this.frames[this.frameCount].addRoll(roll);
    this.adjustRollCount(roll);
    return 'your roll was added';
  }

  checkBonus(roll) {
    const old = this.frameCount - 1;
    const oneFrameAgo = this.frames[old];
    const reallyOld = this.frameCount - 2;
    const twoFrameAgo = this.frames[reallyOld];
    // if its a spare and bonus1 = length 1, add roll to bonus1
    // if its a strike and bonus1 = length 1, add roll to bonus1
    // if its a strike and bonus1 = length 2, and bonus2 = length 1, add roll to bonus2
    // do the same checks for the frame 2 ago

    if (oneFrameAgo.mark !== 'none' && oneFrameAgo.bonus1.length === 1) {
      oneFrameAgo.addBonus1(roll);
    } else if (oneFrameAgo.mark === 'strike' && oneFrameAgo.bonus1.length === 2 && oneFrameAgo.bonus2.length === 1) {
      oneFrameAgo.addBonus2(roll);
    }
    if (this.frameCount > 1) {
      if (twoFrameAgo.mark === 'strike' && twoFrameAgo.bonus2.length === 1) {
        twoFrameAgo.addBonus2(roll);
      }
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
