class Scorecard {
  constructor() {
    this.currentRoll = 1
    this.currentFrame = 0
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
      new Frame()
    ]
  }

  record(score) {
    
    let frame = this.frames[this.currentFrame];
    let previousFrame = this.currentFrame != 0 ? this.frames[this.currentFrame - 1] : false;
    
    if (this.currentRoll === 1) {
      frame.roll1 = score;
      this.currentRoll = 2;
      if (previousFrame != false) {
        
        
        if (previousFrame.isSpare()) {
          previousFrame.spareBonus = score
        }
        else {
          previousFrame.spareBonus = 0
        }
      }
    }
    else {
      frame.roll2 = score;
      this.currentRoll = 1
      this.currentFrame++
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

