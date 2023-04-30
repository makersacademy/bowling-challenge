class Scorecard {
  constructor() {
    this.frames = [];
  }

  addFrame(roll1, roll2 = 0, roll3 = 0) { 
    // create a new frame object and add it to the frames array
    this.frames.push({ roll1, roll2, roll3 });
  }

  calculateScore() {
    let score = 0;
    let frameIndex = 0;
    const numFrames = this.frames.length;
  
    for (let i = 0; i < 10 && frameIndex < numFrames; i++) {
      const frame = this.frames[frameIndex];
      const isStrike = frame.roll1 === 10;
      const isSpare = !isStrike && frame.roll1 + frame.roll2 === 10;
      const frameScore = frame.roll1 + frame.roll2;
  
      // add bonuses for strikes and spares in the current frame
      if (i === 9) {
        // Tenth frame logic
        if (isStrike) {
          score += 10 + frame.roll1 + frame.roll2 + frame.roll3;
          frameIndex += 1;
        } else if (isSpare) {
          score += 10 + frame.roll3;
        } else {
          score += frameScore;
        }
      } else {
          // Frames 1-9 logic
          if (isStrike) {
            score += 10 + this.getStrikeBonus(frameIndex + 1);
            frameIndex++;
          } else if (isSpare) {
            score += 10 + this.getSpareBonus(frameIndex + 1);
            frameIndex++;
          } else {
            score += frameScore;
            frameIndex++;
          }
      }
    }
    return score;
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