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
    console.log("");
    
    console.log(`Record: frame:${this.currentFrame} roll: ${this.currentRoll} scored with ${score}`)
    
    let frame = this.frames[this.currentFrame];
    let previousFrame = this.currentFrame > 0 ? this.frames[this.currentFrame - 1] : false;

    let secondPreviousFrame = this.currentFrame > 1 ? this.frames[this.currentFrame - 2] : false;

    if (this.currentRoll === 1) {
      
      frame.roll1 = score;
      this.assignSpareBonus(previousFrame, score);
      this.assignStrikeBonus(previousFrame, secondPreviousFrame, score);
      if (previousFrame != false && previousFrame.isStrike() && secondPreviousFrame != false && previousFrame.isStrike()) {
        secondPreviousFrame.strikeBonus += score
      }
  
      if (score == 10) {
        this.currentFrame++
      }
      else {
        this.currentRoll = 2;
      }
    }
    else {
      frame.roll2 = score;
      this.assignStrikeBonus(previousFrame, secondPreviousFrame, score);
      this.currentRoll = 1
      this.currentFrame++
    }
  }

  assignStrikeBonus(previousFrame, secondPreviousFrame, score) {
    if (previousFrame != false && previousFrame.isStrike()) {
      previousFrame.strikeBonus += score;
    }
    console.log(`Second previous frame passed to strikeBonus: ${secondPreviousFrame}`)
  }

  assignSpareBonus(previousFrame, score) {
    if (previousFrame != false && previousFrame.isSpare()) {
      previousFrame.spareBonus = score;
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

