class Scorecard {
  constructor() {
    this.frames = [];
    this.score = 0;
    this.frameIndex = 0;
  }

  addFrame(roll1, roll2 = 0, roll3 = 0) { 
    this.frames.push({ roll1, roll2, roll3 });
  }

  calculateScore() {
    const numFrames = this.frames.length;
  
    for (let i = 0; i < 10 && this.frameIndex < numFrames; i++) {
      const frame = this.frames[this.frameIndex];
      const isStrike = frame.roll1 === 10;
      const isSpare = !isStrike && frame.roll1 + frame.roll2 === 10;
      const frameScore = frame.roll1 + frame.roll2;
  
      if (i === 9) {
        this.tenthFrameScoringLogic(frame, isStrike, isSpare, frameScore);
        
      } else {
          this.firstNineFramesScoringLogic(isStrike, isSpare, frameScore);
      }
    }
    return this.score;
  }  

  firstNineFramesScoringLogic(isStrike, isSpare, frameScore) {
    if (isStrike) {
      this.score += 10 + this.getStrikeBonus(this.frameIndex + 1);
      this.frameIndex++;
    } else if (isSpare) {
        this.score += 10 + this.getSpareBonus(this.frameIndex + 1);
        this.frameIndex++;
    } else {
        this.score += frameScore;
        this.frameIndex++;
    }
    return this.score;
  }

  tenthFrameScoringLogic(frame, isStrike, isSpare, frameScore) {
    if (isStrike) {
      this.score += 10 + frame.roll1 + frame.roll2 + frame.roll3;
      this.frameIndex++;
    } else if (isSpare) {
        this.score += 10 + frame.roll3;
    } else {
        this.score += frameScore;
    }
    return this.score;
  }

  getStrikeBonus(nextFrameIndex) {
    if (nextFrameIndex < this.frames.length) {
      const nextFrame = this.frames[nextFrameIndex];
      if (nextFrame.roll1 === 10) {
        if (nextFrameIndex + 1 < this.frames.length) {
          const nextNextFrame = this.frames[nextFrameIndex + 1];
          return 10 + (nextNextFrame ? nextNextFrame.roll1 : 0);
        } else {
            return 10;
        }
      } else {
          return nextFrame.roll1 + nextFrame.roll2;
      }
    }
    return 0;
  }  

  getSpareBonus(nextFrameIndex) {
    if (nextFrameIndex < this.frames.length) {
      const nextFrame = this.frames[nextFrameIndex];
      return nextFrame.roll1;
    }
    return 0;
  }
}

module.exports = Scorecard;