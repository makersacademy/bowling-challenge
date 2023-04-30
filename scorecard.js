class Scorecard {
  constructor() {
    this.frames = []; // array to hold the frames
  }

  addFrame(roll1, roll2) {
    // create a new frame object and add it to the frames array
    this.frames.push({ roll1, roll2 });
  }

  calculateScore() {
    let score = 0;
    let frameIndex = 0;
    const numFrames = this.frames.length;
    for (let i = 0; i < 10 && frameIndex < numFrames; i++) { // iterate through the 10 frames
      const frame = this.frames[frameIndex];
      const isStrike = frame.roll1 === 10;
      const isSpare = !isStrike && frame.roll1 + frame.roll2 === 10;
      const frameScore = frame.roll1 + frame.roll2;
  
      // add bonuses for strikes and spares in the current frame
      if (isStrike) {
        score += 10 + this.getStrikeBonus(frameIndex + 1);
        frameIndex += 1;
      } else if (isSpare) {
        score += 10 + this.getSpareBonus(frameIndex + 1);
        frameIndex += 1;
      } else {
        score += frameScore;
        frameIndex += 1;
      }
    }
    return score;
  }

  getStrikeBonus(nextFrameIndex) {
    if (nextFrameIndex < this.frames.length) {
      const nextFrame = this.frames[nextFrameIndex];
      if (nextFrame.roll1 === 10) { // strike in the next frame
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

// let scorecard = new Scorecard();

// scorecard.addFrame(1, 4);
// scorecard.addFrame(4, 5);
// scorecard.addFrame(6, 4);
// scorecard.addFrame(5, 5);
// scorecard.addFrame(10, 0);
// scorecard.addFrame(0, 1);
// scorecard.addFrame(7, 3);
// scorecard.addFrame(6, 4);
// scorecard.addFrame(10, 0);
// scorecard.addFrame(2, 8);

// console.log(scorecard.calculateScore());