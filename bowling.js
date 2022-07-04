class Bowling {
  constructor(allFrames) {
    this.allFrames = allFrames;
  }

  scorecard() {
    let score = 0
    this.allFrames.map((frame, index) => {
      if (this.isStrike(frame)) {
        score += this.strikeBonus(index);
      } else if (this.isSpare(frame)) {
        score += this.allFrames[index + 1][0];
      }
      for (let frameScore of frame) {
        score += frameScore;
      }
    })
    return score;
  }

  isSpare(frame) {
    return frame.length === 2 && frame[0] + frame[1] === 10;
  }

  isStrike(frame) {
    return frame.length === 1 && frame[0] === 10;
  }
  
  strikeBonus(index) {
    const nextFrame = this.allFrames[index + 1];
    if (this.isStrike(nextFrame)) {
      return nextFrame[0] + this.allFrames[index + 2][0];
    } else {
      return nextFrame[0] + nextFrame[1];
    }
  }
}

module.exports = Bowling;