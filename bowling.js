class Bowling {
  constructor(allFrames) {
    this.allFrames = allFrames;
  }

  scorecard() {
    let score = 0
    this.allFrames.map((frame, index) => {
      if (this.isStrike(frame)) {
        score += this.strikeBonus(index);
      }
      for (let frameScore of frame) {
        score += frameScore;
      }
    })
    return score;
  }

  isStrike(frame) {
    return frame.length === 1 && frame[0] === 10;
  }

  strikeBonus(index) {
    const nextFrame = this.allFrames[index + 1];
    const bonus = nextFrame[0] + nextFrame[1];
    return bonus;
  }
}

module.exports = Bowling;