class Game {
  constructor() {
    this.frames = [];
  }


  addFrame(frame) {
    this.frames.push(frame);
  }


  getGrandTotal() {
    return this.getTotal() + this.getBonus();
  }


  getTotal() {
    return this.frames.reduce((sum, current) => sum + current.getTotal(), 0);
  }


  getBonus() {
    return this.sparesBonus() + this.strikesBonus();
  }


  sparesBonus() {
    let bonus = 0;
    this.frames.forEach((frame, index) => {
      if (index > 0 && this.frames[index - 1].isSpare()) {
        bonus += frame.getFirst();
      }
    });
    return bonus;
  }


  strikesBonus() {
    let bonus = 0;
    this.frames.forEach((frame, index) => {
      const lastFrame = this.frames[index - 1];
      const nextFrame = this.frames[index + 1];
      if (index > 0 && index < 9) {
        if (lastFrame.isStrike()) {
          if (frame.isStrike()) {
            bonus += frame.getFirst() + nextFrame.getFirst();
          } else {
            bonus += frame.getFirst() + frame.getSecond();
          }
        }
      }
      if (index === 9) {
        if (lastFrame.isStrike()) {
          bonus += frame.getFirst() + frame.getSecond();
        }
      }
    });
    return bonus;
  }
}

module.exports = Game;