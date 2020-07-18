class Card {
  constructor() {
    this.frames = [];
    this.frameCount = 0;
    this.rollCount = 1;
    this.scores = [];
    for (let i = 0; i < 10; i += 1) {
      this.frames.push(new Frame());
    }
  }

  roll(roll) {
    if (this.frameCount > 0) {
      this.checkBonus(roll);
    }
    if (this.frameCount < 10) {
      this.frames[this.frameCount].addRoll(roll);
    }
    this.adjustRollCount(roll);
  }

  checkBonus(roll) {
    const oneFrameAgo = this.frames[this.frameCount - 1];
    const twoFrameAgo = this.frames[this.frameCount - 2];

    if (this.frameCount < 11){
      if (oneFrameAgo.mark !== 'none' && oneFrameAgo.bonus1.length === 1) {
        oneFrameAgo.addBonus1(roll);
      } else if (oneFrameAgo.mark === 'strike' && oneFrameAgo.bonus1.length === 2 && oneFrameAgo.bonus2.length === 1) {
        oneFrameAgo.addBonus2(roll);
      }
    }
    if (this.frameCount > 1) {
      if (twoFrameAgo.mark === 'strike' && twoFrameAgo.bonus2.length === 1) {
        twoFrameAgo.addBonus2(roll);
      }
    }
  }

  adjustRollCount(roll) {
    if (roll === 10 && this.frameCount < 11) {
      this.frameCount += 1;
    } else if (roll === 10 && this.frameCount === 11) {
      this.frameCount = 11;
    } else {
      this.rollCount += 1;
      if (this.rollCount === 3) {
        this.frameCount += 1;
        this.rollCount = 1;
      }
    }
  }

  totalScore() {
    const fOne = this.frames[0].score();
    const fTwo = this.frames[1].score();
    const fThree = this.frames[2].score();
    const fFour = this.frames[3].score();
    const fFive = this.frames[4].score();
    const fSix = this.frames[5].score();
    const fSeven = this.frames[6].score();
    const fEight = this.frames[7].score();
    const fNine = this.frames[8].score();
    const fTen = this.frames[9].score();
    return fOne + fTwo + fThree + fFour + fFive + fSix + fSeven + fEight + fNine + fTen;
  }

}
